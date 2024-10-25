import type { PeriodData } from "@stores"
import { colors } from "./colors"

// ItemType
export const ItemType = {
  Food: "food",
  HomeOther: "home-other",
  Fees: "fees",
  Pending: "pending",
  Archive: "archive"
} as const

export type ItemType = (typeof ItemType)[keyof typeof ItemType]

// ItemColorByType
export const ItemColorByType: Record<ItemType, { bg: string; text: string; color: string }> = {
  [ItemType.HomeOther]: { bg: "bg-yellow-500", text: "text-yellow-500", color: colors.yellow[500] },
  [ItemType.Pending]: { bg: "bg-sky-500", text: "text-sky-500", color: colors.sky[500] },
  [ItemType.Food]: { bg: "bg-green-500", text: "text-green-500", color: colors.green[500] },
  [ItemType.Fees]: { bg: "bg-red-500", text: "text-red-500", color: colors.red[500] },
  [ItemType.Archive]: { bg: "bg-gray-400", text: "text-gray-400", color: colors.gray[400] }
} as const

// ItemStatus
export const ItemStatus = {
  Done: "done",
  Process: "process",
  Expenses: "expenses"
} as const

export const ItemColorByStatus: Record<ItemStatusType, { bg: string; text: string; color: string }> = {
  [ItemStatus.Done]: { bg: "bg-red-300", text: "text-red-300", color: colors.red[300] },
  [ItemStatus.Process]: { bg: "bg-yellow-400", text: "text-yellow-400", color: colors.yellow[400] },
  [ItemStatus.Expenses]: { bg: "bg-sky-400", text: "text-sky-400", color: colors.sky[400] }
} as const

export type ItemStatusType = (typeof ItemStatus)[keyof typeof ItemStatus]

// Model
export interface ItemData {
  id: string
  title: string
  price: number
  type: ItemType
  status: ItemStatusType
  period: PeriodData
}

export type UpdateItemData = Required<Pick<ItemData, "id">> &
  Partial<Omit<ItemData & { oldStatus: ItemStatusType }, "id">>

// Dates
export const MONTH = [
  ["01", "January"],
  ["02", "February"],
  ["03", "March"],
  ["04", "April"],
  ["05", "May"],
  ["06", "June"],
  ["07", "July"],
  ["08", "August"],
  ["09", "September"],
  ["10", "October"],
  ["11", "November"],
  ["12", "December"]
] as const

export const YEAR = ["2024"] as const

// Totals
export type TotalData = Record<ItemType, number>

// Dropdowns
export enum EXPENSES_ACTIONS {
  DEFAULT_LIST = "add-default-list"
}
