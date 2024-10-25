"use client"

import type { FC } from "react"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react"
import { EllipsisVertical } from "@icons/ellipsis-vertical"
import { EXPENSES_ACTIONS, ItemStatus, ItemType } from "@constant"
import { useCreateItem } from "@services/createItem"
import { PeriodDateStore } from "@stores"

export const ActionDropdown: FC = () => {
  const { mutate: createItems, isPending } = useCreateItem()

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          isLoading={isPending}
          disabled={isPending}
          size='sm'
          radius='sm'
          className='text-gray-500'
          isIconOnly
          variant='light'
        >
          <EllipsisVertical />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Actions' onAction={(key) => onAction(key, createItems)}>
        <DropdownItem key={EXPENSES_ACTIONS.DEFAULT_LIST} description='add default list of month expenses'>
          Add default list
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

// TODO: update types
const onAction = (key: any, action: any) => {
  switch (key) {
    case EXPENSES_ACTIONS.DEFAULT_LIST: {
      action(
        [
          { id: "food", title: "Food", type: ItemType.Food, price: 11000 },
          { id: "parents", title: "Parents", type: ItemType.Fees, price: 5000 },
          { id: "taxes", title: "Taxes (EP&ESV)", type: ItemType.Fees },
          { id: "membership", title: "Membership fee", type: ItemType.Fees, price: 500 },
          { id: "electricity", title: "Utilities electricity", type: ItemType.Fees },
          { id: "water", title: "Utilities water supply", type: ItemType.Fees },
          { id: "internet", title: "Internet provider", type: ItemType.Fees, price: 500 },
          { id: "mobile", title: "Mobile operator", type: ItemType.Fees, price: 200 },
          { id: "essentials", title: "Household and essentials", type: ItemType.HomeOther },
          { id: "car", title: "Car refueling", type: ItemType.HomeOther }
        ].map((item) => ({ price: 0, status: ItemStatus.Expenses, period: PeriodDateStore.periodDate, ...item }))
      )
      break
    }

    default:
      console.error("Invalid action type")
  }
}
