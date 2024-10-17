import type { FC } from "react"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react"
import { ItemColorByType, type ItemData, ItemType } from "@constant"

import { Flag } from "@icons/flag"
import { ITEM_TYPE_OPTIONS } from "@/_helpers/select-options"

interface DropdownTypes {
  onSelect: (v: any) => void
  item: Partial<ItemData>
  isDisabled?: boolean
}

export const DropdownTypes: FC<DropdownTypes> = ({ onSelect, item = {}, isDisabled = false }) => {
  if (!item.type) {
    return null
  }

  const onAction = (type: any) => onSelect({ id: item.id, status: item.status, type })

  return (
    <Dropdown isDisabled={isDisabled}>
      <DropdownTrigger>
        <Button isIconOnly size='sm' radius='sm' variant='flat' className={ItemColorByType[item.type].text}>
          <Flag />
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label='Types'
        items={ITEM_TYPE_OPTIONS}
        onAction={onAction}
        disallowEmptySelection
        selectionMode='single'
        defaultSelectedKeys={[ItemType.Pending]}
        selectedKeys={[item.type]}
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
