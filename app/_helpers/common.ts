import { ItemStatus, type ItemType, type ItemStatusType, type ItemData } from "@constant"
import get from "lodash/get"
import sumBy from "lodash/sumBy"

export const newStatus = (status: ItemStatusType) =>
  ({
    [ItemStatus.Expenses]: ItemStatus.Process,
    [ItemStatus.Process]: ItemStatus.Done,
    [ItemStatus.Done]: ItemStatus.Expenses
  })[status]

export const sumOf = (type: ItemType, data?: Record<ItemType, ItemData[]>) =>
  sumBy(get(data, type, []), ({ price }) => price) || 0
