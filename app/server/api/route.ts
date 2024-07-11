"use server"

import { NextResponse } from "next/server"
import ItemModel from "@models/ItemModel"
import { connectDB } from "@utils/connectDB"
import { ItemStatus } from "@constant"
import pick from "lodash/pick"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get("status") || ItemStatus.Costs
  await connectDB()
  const data = await ItemModel.find({ status })
  return NextResponse.json({ status: 200, data })
}

export async function POST(request: Request) {
  await connectDB()
  const data = await request.json()
  const item = await ItemModel.create(data)
  return NextResponse.json({ status: 200, item: pick(item, ["_id", "title", "price", "type", "status"]) })
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
