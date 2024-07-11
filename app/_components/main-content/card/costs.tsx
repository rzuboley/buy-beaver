"use client"

import { Card } from "@/_components/main-content/card"
import { useGetItems } from "@services/getItems"
import { type ItemData, ItemStatus, type ItemStatusType } from "@constant"
import { Listbox, ListboxItem } from "@nextui-org/react"
import { useCallback, useState, type FC } from "react"
import { DropdownTypes } from "@/_components/main-content/card/item/dropdown-types"
import { ActionSection } from "@/_components/main-content/card/item/action-section"
import { useDeleteItem } from "@services/deleteItem"
import { useUpdateItem } from "@services/updateItem"

type DeleteData = Pick<ItemData, "id" | "status">
type ChangeStatusData = DeleteData & { oldStatus: ItemStatusType }
type ChangeTypeData = DeleteData & Pick<ItemData, "type">

export const Costs: FC = () => {
  const [disabledKeys, setDisabledKeys] = useState<string[]>([])
  const { data, isPending } = useGetItems(ItemStatus.Costs)
  const { mutate: deleteItem } = useDeleteItem()
  const { mutate: updateItem } = useUpdateItem()

  const onChangeType = useCallback((data: ChangeTypeData) => updateItem(data), [updateItem])

  const onChangeStatus = useCallback((data: ChangeStatusData) => updateItem(data), [updateItem])

  const onDelete = useCallback(
    ({ id, status }: DeleteData) => {
      setDisabledKeys((state) => [...state, id])
      deleteItem({ id, status }, { onSuccess: () => setDisabledKeys((state) => state.filter((key) => key !== id)) })
    },
    [deleteItem]
  )

  return (
    <Card title='Costs' type={ItemStatus.Costs} withFooter isLoading={isPending}>
      <Listbox variant='faded' aria-label='Costs items list' items={data} disabledKeys={disabledKeys}>
        {({ title, type, price, id, status }) => (
          <ListboxItem
            className='group/item'
            key={id}
            startContent={<DropdownTypes onSelect={(type) => onChangeType({ id, type, status })} value={type} />}
            endContent={
              <ActionSection
                onDelete={() => onDelete({ id, status })}
                onChangeStatus={() => onChangeStatus({ id, status: ItemStatus.Pending, oldStatus: status })}
              />
            }
          >
            <span className='flex items-center gap-2 justify-between'>
              <span className='truncate'>{title}</span>
              <span className='text-base text-stone-500'>{price}</span>
            </span>
          </ListboxItem>
        )}
      </Listbox>
    </Card>
  )
}
