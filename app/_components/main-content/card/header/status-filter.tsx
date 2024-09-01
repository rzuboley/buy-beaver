"use client"

import type { FC } from "react"
import { Select, SelectItem, type SelectProps } from "@nextui-org/react"
import { ITEM_TYPE_OPTIONS } from "@/_helpers/item-type-options"
import { ExpenseFilterStore, PendingFilterStore, DoneFilterStore } from "@stores"
import { type ItemStatusType, ItemStatus } from "@constant"
import { observer } from "mobx-react-lite"

const SelectFilter: FC<Omit<SelectProps, "children">> = (props) => {
  return (
    <Select
      placeholder='Filter by type'
      size='sm'
      items={ITEM_TYPE_OPTIONS}
      variant='bordered'
      selectionMode='multiple'
      className='w-1/2'
      aria-label='select'
      {...props}
    >
      {({ key, label, ...props }: any) => (
        <SelectItem key={key} {...props}>
          {label}
        </SelectItem>
      )}
    </Select>
  )
}

const onExpenseSelectionChange = (data: any) => ExpenseFilterStore.setFilter(Array.from(data))
const onPendingSelectionChange = (data: any) => PendingFilterStore.setFilter(Array.from(data))
const onDoneSelectionChange = (data: any) => DoneFilterStore.setFilter(Array.from(data))

const ExpenseFilter: FC = observer(() => (
  <SelectFilter selectedKeys={ExpenseFilterStore.filter} onSelectionChange={onExpenseSelectionChange} />
))

const PendingFilter: FC = observer(() => (
  <SelectFilter selectedKeys={PendingFilterStore.filter} onSelectionChange={onPendingSelectionChange} />
))

const DoneFilter: FC = observer(() => (
  <SelectFilter selectedKeys={DoneFilterStore.filter} onSelectionChange={onDoneSelectionChange} />
))

export const StatusFilter: FC<{ statusType: ItemStatusType }> = ({ statusType }) => {
  switch (statusType) {
    case ItemStatus.Done:
      return <DoneFilter />
    case ItemStatus.Expenses:
      return <ExpenseFilter />
    case ItemStatus.Pending:
      return <PendingFilter />
    default:
      throw "Invalid item status filter"
  }
}
