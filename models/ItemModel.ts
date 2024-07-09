import { Schema, model } from "mongoose"
import { formatCurrency } from "@helpers/formatting"
import { ItemType } from "@helpers/constant"

const Item = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    price: {
      type: Number,
      required: true,
      set: formatCurrency
    },
    type: {
      type: String,
      default: ItemType.Pending
    }
  },
  {
    minimize: true,
    timestamps: false,
    versionKey: false
  }
)

export default model("Item", Item)
