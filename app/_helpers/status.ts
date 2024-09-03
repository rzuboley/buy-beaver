import { ItemStatus, type ItemStatusType } from "@constant"

export const newStatus = (status: ItemStatusType) =>
  ({
    [ItemStatus.Expenses]: ItemStatus.Pending,
    [ItemStatus.Pending]: ItemStatus.Done,
    [ItemStatus.Done]: ItemStatus.Expenses
  })[status]
