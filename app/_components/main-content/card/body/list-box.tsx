"use client"

import pick from "lodash/pick"
import type { FC } from "react"
import values from "lodash/values"
import {
  ExpenseFilterStore,
  PendingFilterStore,
  DoneFilterStore,
  ExpenseTotalsStore,
  DoneTotalsStore,
  PendingTotalsStore
} from "@stores"
import { Listbox, type ListboxProps } from "@nextui-org/react"
import { observer } from "mobx-react-lite"
import { sumOf } from "@helpers/common"
import { type ItemData, type ItemStatusType, ItemStatus, ItemType, type TotalData } from "@constant"

export const ListBox: FC<Props> = (props) => {
  switch (props.statusType) {
    case ItemStatus.Expenses:
      return <Box {...props} store={ExpenseFilterStore} setTotals={ExpenseTotalsStore.setTotals} />
    case ItemStatus.Process:
      return <Box {...props} store={PendingFilterStore} setTotals={PendingTotalsStore.setTotals} />
    case ItemStatus.Done:
      return <Box {...props} store={DoneFilterStore} setTotals={DoneTotalsStore.setTotals} />
    default:
      throw "Incorrect Item status for ListBox"
  }
}

const Box: FC<Props & Store & SetTotals> = observer(({ statusType, items, store, setTotals, children }) => {
  const data = store.filter.length ? values(pick(items, store.filter)) : values(items)
  setTotals({
    [ItemType.Archive]: sumOf(ItemType.Archive, items),
    [ItemType.Fees]: sumOf(ItemType.Fees, items),
    [ItemType.Food]: sumOf(ItemType.Food, items),
    [ItemType.HomeOther]: sumOf(ItemType.HomeOther, items),
    [ItemType.Pending]: sumOf(ItemType.Pending, items)
  })

  return (
    <Listbox variant='faded' aria-label={`${statusType} items list`} items={data.flat()}>
      {children}
    </Listbox>
  )
})

interface Props extends Omit<ListboxProps, "children" | "items"> {
  statusType: ItemStatusType
  items?: Record<ItemType, ItemData[]>
  children: (Item: ItemData) => JSX.Element
}

interface Store {
  store: typeof DoneFilterStore | typeof PendingFilterStore | typeof ExpenseFilterStore
}

interface SetTotals {
  setTotals: (data: Partial<TotalData>) => void
}
