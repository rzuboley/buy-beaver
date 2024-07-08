"use client"

import type { FC } from "react"
import { Select, SelectItem } from "@nextui-org/react"
import { ITEM_TYPE_OPTIONS } from "@/_helpers/item-type-options"

export const SelectFilter: FC = () => {
  return (
    <Select
      placeholder='Filter by type'
      size='sm'
      items={ITEM_TYPE_OPTIONS}
      variant='bordered'
      selectionMode='multiple'
      className='w-1/2'
      aria-label='select'
    >
      {({ key, label, ...props }) => (
        <SelectItem key={key} {...props}>
          {label}
        </SelectItem>
      )}
    </Select>
  )
}
