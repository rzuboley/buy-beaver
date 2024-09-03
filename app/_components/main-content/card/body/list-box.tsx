"use client"

import pick from "lodash/pick"
import type { FC } from "react"
import values from "lodash/values"
import { ExpenseFilterStore, PendingFilterStore, DoneFilterStore } from "@stores"
import { Listbox, type ListboxProps } from "@nextui-org/react"
import { observer } from "mobx-react-lite"
import { type ItemType, type ItemData, type ItemStatusType, ItemStatus } from "@constant"

interface Props extends Omit<ListboxProps, "children" | "items"> {
  statusType: ItemStatusType
  items?: Record<ItemType, ItemData[]>
  children: (Item: ItemData) => JSX.Element
}

interface Store {
  store: typeof DoneFilterStore | typeof PendingFilterStore | typeof ExpenseFilterStore
}

const Box: FC<Props & Store> = observer(({ statusType, items, store, children }) => {
  const data = store.filter.length ? values(pick(items, store.filter)) : values(items)

  return (
    <Listbox variant='faded' aria-label={`${statusType} items list`} items={data.flat()}>
      {children}
    </Listbox>
  )
})

export const ListBox: FC<Props> = (props) => {
  switch (props.statusType) {
    case ItemStatus.Expenses:
      return <Box {...props} store={ExpenseFilterStore} />
    case ItemStatus.Pending:
      return <Box {...props} store={PendingFilterStore} />
    case ItemStatus.Done:
      return <Box {...props} store={DoneFilterStore} />
    default:
      throw "Incorrect Item status for ListBox"
  }
}
