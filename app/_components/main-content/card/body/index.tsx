"use client"

import { useGetItems } from "@services/getItems"
import { type ItemData, ItemStatus, type ItemStatusType } from "@constant"
import { CardBody, ListboxItem, Skeleton } from "@nextui-org/react"
import { useCallback, type FC } from "react"
import { DropdownTypes } from "@/_components/main-content/card/item/dropdown-types"
import { ActionSection } from "@/_components/main-content/card/item/action-section"
import { useDeleteItem } from "@services/deleteItem"
import { useUpdateItem } from "@services/updateItem"
import { useModalContext, MODAL } from "@contexts/modal"
import { ListBox } from "@/_components/main-content/card/body/list-box"

type DeleteData = Pick<ItemData, "id" | "status">
type ChangeStatusData = DeleteData & { oldStatus: ItemStatusType }
type ChangeTypeData = DeleteData & Pick<ItemData, "type">

interface Props {
  statusType: ItemStatusType
}

export const Body: FC<Props> = ({ statusType }) => {
  const { data, isPending } = useGetItems(statusType)
  const { mutate: deleteItem } = useDeleteItem()
  const { mutate: updateItem } = useUpdateItem()
  const { showModal } = useModalContext()

  const onSelectType = useCallback((data: ChangeTypeData) => updateItem(data), [updateItem])
  const onChangeStatus = useCallback((data: ChangeStatusData) => updateItem(data), [updateItem])
  const onDelete = useCallback(
    ({ id, status }: DeleteData) => {
      deleteItem({ id, status })
    },
    [deleteItem]
  )

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
}

const newStatus = (status: ItemStatusType) =>
  ({
    [ItemStatus.Expenses]: ItemStatus.Pending,
    [ItemStatus.Pending]: ItemStatus.Done,
    [ItemStatus.Done]: ItemStatus.Expenses
  })[status]
