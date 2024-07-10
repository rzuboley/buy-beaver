"use server"

import { NextResponse } from "next/server"
import ItemModel from "@models/ItemModel"
import { connectDB } from "@utils/connectDB"
import pick from "lodash/pick"

export async function GET() {
  await connectDB()
  const data = await ItemModel.find()
  return NextResponse.json({ status: 200, data })
}

export async function POST(request: Request) {
  await connectDB()
  const data = await request.json()
  const item = await ItemModel.create(data)
  return NextResponse.json({ status: 200, item: pick(item, ["_id", "title", "price", "type"]) })
}

export async function DELETE(request: Request) {
  await connectDB()
  const data = await request.json()
  const item = await ItemModel.deleteOne({ _id: data.id })
  return NextResponse.json({ status: 200, data: pick(item, ["deletedCount"]) })
}
