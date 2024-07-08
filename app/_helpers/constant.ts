// AmountType
export const AmountType = {
  Income: "income",
  Reserved: "reserved",
  Spent: "spent"
} as const

export type AmountType = (typeof AmountType)[keyof typeof AmountType]

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

export type ItemStatusType = (typeof ItemStatus)[keyof typeof ItemStatus]

// Other
export const PIE_DATA = [
  {
    id: AmountType.Income,
    label: AmountType.Income.toUpperCase(),
    value: 40
  },
  {
    id: AmountType.Spent,
    label: AmountType.Spent.toUpperCase(),
    value: 40
  },
  {
    id: AmountType.Reserved,
    label: AmountType.Reserved.toUpperCase(),
    value: 20
  }
]
