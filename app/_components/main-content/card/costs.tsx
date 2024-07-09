"use client"

import { Card } from "@/_components/main-content/card"
import { type ItemData, useGetItems } from "@services/getItems"
import { ItemStatus, ItemType, ItemColorByType } from "@constant"
import { cn, Divider, Listbox, ListboxItem } from "@nextui-org/react"
import type { FC } from "react"

export const Costs: FC = () => {
  const { data, isPending } = useGetItems()

  return (
    <Card title='Costs' type={ItemStatus.Costs} withFooter isLoading={isPending}>
      <Listbox variant='faded' aria-label='Items menu' items={data}>
        {({ title, type, price, _id: id }) => (
          <ListboxItem key={id} startContent={<ColorDivider type={type} />}>
            {title}
            {price}
          </ListboxItem>
        )}
      </Listbox>
    </Card>
  )
}

const ColorDivider: FC<Pick<ItemData, "type">> = ({ type }) => {
  return (
    <Divider
      orientation='vertical'
      className={cn("w-1.5 h-4 rounded-md", {
        [ItemColorByType.archive.bg]: type === ItemType.Archive,
        [ItemColorByType.fees.bg]: type === ItemType.Fees,
        [ItemColorByType.food.bg]: type === ItemType.Food,
        [ItemColorByType["home-other"].bg]: type === ItemType.HomeOther,
        [ItemColorByType.pending.bg]: type === ItemType.Pending
      })}
    />
  )
}
