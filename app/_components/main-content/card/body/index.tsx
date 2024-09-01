"use client"

import { useGetItems } from "@services/getItems"
import { type ItemData, ItemStatus, type ItemStatusType } from "@constant"
import { CardBody, Listbox, ListboxItem, Skeleton, useDisclosure } from "@nextui-org/react"
import { useCallback, useState, type FC } from "react"
import { DropdownTypes } from "@/_components/main-content/card/item/dropdown-types"
import { ActionSection } from "@/_components/main-content/card/item/action-section"
import { useDeleteItem } from "@services/deleteItem"
import { useUpdateItem } from "@services/updateItem"
import { useModalContext, MODAL } from "@contexts/modal"

type DeleteData = Pick<ItemData, "id" | "status">
type ChangeStatusData = DeleteData & { oldStatus: ItemStatusType }
type ChangeTypeData = DeleteData & Pick<ItemData, "type">

interface Body {
  statusType: ItemStatusType
}

export const Body: FC<Body> = ({ statusType }) => {
  const [disabledKeys, setDisabledKeys] = useState<string[]>([])
  const { data, isPending } = useGetItems(statusType)
  const { mutate: deleteItem } = useDeleteItem()
  const { mutate: updateItem } = useUpdateItem()
  const { showModal } = useModalContext()

  const onSelectType = useCallback((data: ChangeTypeData) => updateItem(data), [updateItem])
  const onChangeStatus = useCallback((data: ChangeStatusData) => updateItem(data), [updateItem])
  const onDelete = useCallback(
    ({ id, status }: DeleteData) => {
      setDisabledKeys((state) => [...state, id])
      deleteItem({ id, status }, { onSuccess: () => setDisabledKeys((state) => state.filter((key) => key !== id)) })
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
      <Listbox
        variant='faded'
        aria-label={`${statusType} items list`}
        items={Object.values(data || {}).flat()}
        disabledKeys={disabledKeys}
      >
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
      </Listbox>
    </CardBody>
  )
}

const newStatus = (status: ItemStatusType) =>
  ({
    [ItemStatus.Costs]: ItemStatus.Pending,
    [ItemStatus.Pending]: ItemStatus.Done,
    [ItemStatus.Done]: ItemStatus.Costs
  })[status]
