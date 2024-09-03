"use client"

import type { ItemData, ItemStatusType } from "@constant"
import { ActionSection } from "@/_components/main-content/card/item/action-section"
import { CardBody, ListboxItem, Skeleton } from "@nextui-org/react"
import { DropdownTypes } from "@/_components/main-content/card/item/dropdown-types"
import { ListBox } from "@/_components/main-content/card/body/list-box"
import { PeriodDateStore } from "@stores"
import { newStatus } from "@helpers/status"
import { observer } from "mobx-react-lite"
import { useCallback, type FC } from "react"
import { useDeleteItem } from "@services/deleteItem"
import { useGetItems } from "@services/getItems"
import { useModalContext, MODAL } from "@contexts/modal"
import { useUpdateItem } from "@services/updateItem"

export const Body: FC<Props> = observer(({ statusType }) => {
  const { data, isPending } = useGetItems(statusType, PeriodDateStore.periodDate)
  const { mutate: deleteItem } = useDeleteItem()
  const { mutate: updateItem } = useUpdateItem()
  const { showModal } = useModalContext()

  const onSelectType = useCallback((data: ChangeTypeData) => updateItem(data), [updateItem])
  const onChangeStatus = useCallback((data: ChangeStatusData) => updateItem(data), [updateItem])
  const onDelete = useCallback((data: DeleteData) => deleteItem(data), [deleteItem])

  if (isPending) {
    return (
      <CardBody>
        <Skeleton className='grow rounded-md' />
      </CardBody>
    )
  }

  return (
    <CardBody>
      <ListBox statusType={statusType} items={data}>
        {(item) => (
          <ListboxItem
            textValue={item.title}
            className='group/item'
            key={item.id}
            startContent={<DropdownTypes onSelect={onSelectType} item={item} />}
            endContent={
              <ActionSection
                status={item.status}
                onDelete={() => onDelete(item)}
                onEdit={() => showModal(MODAL.EDIT_ITEM, { item })}
                onChangeStatus={() =>
                  onChangeStatus({ id: item.id, status: newStatus(item.status), oldStatus: item.status })
                }
              />
            }
          >
            <span className='flex items-center gap-2 justify-between'>
              <span className='truncate'>{item.title}</span>
              <span className='text-base text-stone-500'>{item.price}</span>
            </span>
          </ListboxItem>
        )}
      </ListBox>
    </CardBody>
  )
})

type DeleteData = Pick<ItemData, "id" | "status">
type ChangeStatusData = Pick<ItemData, "id" | "status"> & { oldStatus: ItemStatusType }
type ChangeTypeData = Pick<ItemData, "id" | "status" | "type">

interface Props {
  statusType: ItemStatusType
}
