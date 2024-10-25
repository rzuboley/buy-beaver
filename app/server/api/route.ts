"use server"

import dayjs from "dayjs"
import { NextResponse } from "next/server"
import ItemModel from "@models/ItemModel"
import { connectDB } from "@utils/connectDB"
import { ItemStatus } from "@constant"
import pick from "lodash/pick"
import isArray from "lodash/isArray"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const [status, month, year] = [
    searchParams.get("status") || ItemStatus.Expenses,
    searchParams.get("month") || dayjs().format("MM"),
    searchParams.get("year") || dayjs().format("YYYY")
  ]

  await connectDB()
  const data = await ItemModel.aggregate([
    { $match: { status, "period.year": year, "period.month": month } },
    { $project: { _id: 1, title: 1, price: 1, type: 1, status: 1, id: { $toString: "$_id" }, period: 1 } },
    { $group: { _id: "$type", items: { $push: "$$ROOT" } } }
  ])

  return NextResponse.json({ status: 200, data })
}

export async function POST(request: Request) {
  await connectDB()
  const data = await request.json()
  try {
    const item = isArray(data)
      ? await ItemModel.insertMany(data, { ordered: false }) // Ignores errors
      : await ItemModel.create(data)
    return NextResponse.json({ status: 200, item })
  } catch (err: any) {
    if (err.insertedDocs?.length) {
      return NextResponse.json({ status: 200, item: err.insertedDocs })
    }
    return NextResponse.json({ status: 500 })
  }
}

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url)
  const itemId = searchParams.get("id")
  await connectDB()
  const data = await request.json()
  const item = await ItemModel.findOneAndUpdate(
    { _id: itemId },
    { $set: data },
    { new: true, upsert: true, runValidators: true }
  )
  return NextResponse.json({ status: 200, item })
}

export async function DELETE(request: Request) {
  await connectDB()
  const data = await request.json()
  const item = await ItemModel.deleteOne({ _id: data.id })
  return NextResponse.json({ status: 200, data: pick(item, ["deletedCount"]) })
}
