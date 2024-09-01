import { Schema, model, models } from "mongoose"
import { formatCurrency } from "@helpers/formatting"
import { ItemStatus, ItemType } from "@constant"

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
    },
    status: {
      type: String,
      default: ItemStatus.Expenses
    }
  },
  {
    minimize: true,
    timestamps: false,
    versionKey: false,
    virtuals: {
      id: {
        get() {
          return this._id.toString()
        }
      }
    },
    toJSON: { virtuals: true } // return virtuals in response
  }
)

export default models.Item || model("Item", Item)
