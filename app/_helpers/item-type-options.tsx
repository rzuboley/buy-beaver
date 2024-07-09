import { ItemColorByType, ItemType } from "@constant"
import { cn } from "@nextui-org/react"

const classes = "p-1 rounded-full"

export const ITEM_TYPE_OPTIONS = [
  {
    key: ItemType.Food,
    label: "Food",
    startContent: <i className={cn([classes, ItemColorByType[ItemType.Food].bg])} />
  },
  {
    key: ItemType.HomeOther,
    label: "Home Other",
    startContent: <i className={cn([classes, ItemColorByType[ItemType.HomeOther].bg])} />
  },
  {
    key: ItemType.Fees,
    label: "Fees",
    startContent: <i className={cn([classes, ItemColorByType[ItemType.Fees].bg])} />
  },
  {
    key: ItemType.Pending,
    label: "May to buy",
    startContent: <i className={cn([classes, ItemColorByType[ItemType.Pending].bg])} />
  },
  {
    key: ItemType.Archive,
    label: "Archive",
    startContent: <i className={cn([classes, ItemColorByType[ItemType.Archive].bg])} />
  }
]
