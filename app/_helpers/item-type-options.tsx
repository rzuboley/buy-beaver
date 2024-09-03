import { ItemColorByType, ItemType } from "@constant"
import { cn } from "@nextui-org/react"

const classes = "p-1 rounded-full"

export const ITEM_TYPE_LABEL = {
  [ItemType.Food]: "Food",
  [ItemType.HomeOther]: "Home Other",
  [ItemType.Fees]: "Fees",
  [ItemType.Pending]: "May to buy",
  [ItemType.Archive]: "Archive"
} as const

export const ITEM_TYPE_OPTIONS = [
  {
    key: ItemType.Food,
    label: ITEM_TYPE_LABEL[ItemType.Food],
    startContent: <i className={cn([classes, ItemColorByType[ItemType.Food].bg])} />
  },
  {
    key: ItemType.HomeOther,
    label: ITEM_TYPE_LABEL[ItemType.HomeOther],
    startContent: <i className={cn([classes, ItemColorByType[ItemType.HomeOther].bg])} />
  },
  {
    key: ItemType.Fees,
    label: ITEM_TYPE_LABEL[ItemType.Fees],
    startContent: <i className={cn([classes, ItemColorByType[ItemType.Fees].bg])} />
  },
  {
    key: ItemType.Pending,
    label: ITEM_TYPE_LABEL[ItemType.Pending],
    startContent: <i className={cn([classes, ItemColorByType[ItemType.Pending].bg])} />
  },
  {
    key: ItemType.Archive,
    label: ITEM_TYPE_LABEL[ItemType.Archive],
    startContent: <i className={cn([classes, ItemColorByType[ItemType.Archive].bg])} />
  }
] as const
