import type { FC } from "react"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, type MenuProps } from "@nextui-org/react"
import { ItemColorByType, ItemType } from "@constant"

import { Flag } from "@icons/flag"
import { ITEM_TYPE_OPTIONS } from "@/_helpers/item-type-options"

interface DropdownTypes {
  onSelect: MenuProps["onAction"]
  value: ItemType
  isDisabled?: boolean
}

export const DropdownTypes: FC<DropdownTypes> = ({ onSelect, value, isDisabled = false }) => {
  return (
    <Dropdown isDisabled={isDisabled}>
      <DropdownTrigger>
        <Button isIconOnly size='sm' radius='sm' variant='flat' className={ItemColorByType[value].text}>
          <Flag />
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label='Types'
        items={ITEM_TYPE_OPTIONS}
        onAction={onSelect}
        disallowEmptySelection
        selectionMode='single'
        defaultSelectedKeys={[ItemType.Pending]}
        selectedKeys={[value]}
      >
        {({ key, label, ...props }) => (
          <DropdownItem key={key} {...props}>
            {label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}
