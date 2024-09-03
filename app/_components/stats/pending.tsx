"use client"

import { useMemo, type FC } from "react"
import values from "lodash/values"
import { Card, CardBody } from "@nextui-org/react"
import { PendingTotalsStore } from "@stores"
import { ItemType } from "@constant"
import { RowType } from "./row"
import { observer } from "mobx-react-lite"
import { PieChart } from "./pie-chart"
import { ITEM_TYPE_LABEL } from "@helpers/item-type-options"

export const PendingSection: FC = observer(() => {
  const { total } = PendingTotalsStore

  const chartData = useMemo(
    () => types.map((type) => ({ id: type, label: ITEM_TYPE_LABEL[type], value: total[type] })),
    [total]
  )

  return (
    <Card shadow='sm' radius='sm' fullWidth className='bg-stone-100'>
      <CardBody className='flex-row justify-between items-center'>
        <div className='h-28 w-28'>
          <PieChart data={chartData} />
        </div>

        <div className='gap-5'>
          {types.map((type) => (
            <RowType key={type} type={type} value={total[type]} label={ITEM_TYPE_LABEL[type]} />
          ))}
        </div>
      </CardBody>
    </Card>
  )
})

const types = values(ItemType)
