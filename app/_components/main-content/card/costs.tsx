"use client"

import { Card } from "@/_components/main-content/card"
import { useGetItems } from "@services/getItems"
import { type ItemData, ItemStatus } from "@constant"
import { Listbox, ListboxItem } from "@nextui-org/react"
import { useCallback, useState, type FC } from "react"
import { DropdownTypes } from "@/_components/main-content/card/item/dropdown-types"
import { ActionSection } from "@/_components/main-content/card/item/action-section"
import { useDeleteItem } from "@services/deleteItem"

export const Costs: FC = () => {
  const [disabledKeys, setDisabledKeys] = useState<string[]>([])
  const { data, isPending } = useGetItems()
  const { mutate } = useDeleteItem()

  const onChangeItemType = useCallback(() => console.log("TODO: ==="), [])

  const onDelete = useCallback(
    (id: ItemData["id"]) => {
      setDisabledKeys((state) => [...state, id])
      mutate(id, { onSuccess: () => setDisabledKeys((state) => state.filter((key) => key !== id)) })
    },
    [mutate]
  )

  return (
    <Card title='Costs' type={ItemStatus.Costs} withFooter isLoading={isPending}>
      <Listbox variant='faded' aria-label='Costs items list' items={data} disabledKeys={disabledKeys}>
        {({ title, type, price, id }) => (
          <ListboxItem
            className='group/item'
            key={id}
            startContent={<DropdownTypes onSelect={onChangeItemType} value={type} />}
            endContent={
              <>
                <span className='text-base text-stone-500'>{price}</span>
                <ActionSection onDelete={() => onDelete(id)} />
              </>
            }
          >
            {title}
          </ListboxItem>
        )}
      </Listbox>
    </Card>
  )
}
