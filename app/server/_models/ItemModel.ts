import { Schema, model, models } from "mongoose"
import { formatCurrency } from "@helpers/formatting"
import { ItemStatus, ItemType } from "@constant"
import dayjs from "dayjs"

const PeriodSchema = new Schema(
  {
    year: {
      type: String,
      required: true,
      default: dayjs().format("YYYY")
    },
    month: {
      type: String,
      required: true,
      default: dayjs().format("MM")
    },
    day: {
      type: String,
      required: true,
      default: dayjs().format("DD")
    }
  },
  { _id: false }
)

const Item = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true
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
    },
    period: {
      type: PeriodSchema,
      required: true
    },
    userId: { type: String, required: true }
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
