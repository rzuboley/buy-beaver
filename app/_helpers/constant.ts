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
export const ItemColorByType: Record<ItemType, { bg: string; text: string }> = {
  [ItemType.Food]: { bg: "bg-green-500", text: "text-green-500" },
  [ItemType.HomeOther]: { bg: "bg-yellow-500", text: "text-yellow-500" },
  [ItemType.Fees]: { bg: "bg-red-500", text: "text-red-500" },
  [ItemType.Pending]: { bg: "bg-sky-500", text: "text-sky-500" },
  [ItemType.Archive]: { bg: "bg-gray-400", text: "text-gray-400" }
} as const

// ItemStatus
export const ItemStatus = {
  Done: "done",
  Pending: "pending",
  Costs: "costs"
} as const

export const ItemColorByStatus: Record<ItemStatusType, { bg: string; text: string; color: string }> = {
  [ItemStatus.Done]: { bg: "bg-red-300", text: "text-red-300", color: colors.red[300] },
  [ItemStatus.Pending]: { bg: "bg-yellow-400", text: "text-yellow-400", color: colors.yellow[400] },
  [ItemStatus.Costs]: { bg: "bg-sky-400", text: "text-sky-400", color: colors.sky[400] }
} as const

export type ItemStatusType = (typeof ItemStatus)[keyof typeof ItemStatus]

// Other
export const PIE_DATA = [
  {
    id: ItemStatus.Done,
    label: ItemStatus.Done.toUpperCase(),
    value: 40
  },
  {
    id: ItemStatus.Pending,
    label: ItemStatus.Pending.toUpperCase(),
    value: 40
  },
  {
    id: ItemStatus.Costs,
    label: ItemStatus.Costs.toUpperCase(),
    value: 20
  }
]

// Model
export interface ItemData {
  id: string
  title: string
  price: number
  type: ItemType
}
