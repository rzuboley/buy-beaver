"use client"

import { useMemo, type FC } from "react"
import values from "lodash/values"
import { Card, CardBody } from "@nextui-org/react"
import { ProcessTotalsStore } from "@stores"
import { ItemStatus, ItemType } from "@constant"
import { RowType } from "./row"
import { observer } from "mobx-react-lite"
import { PieChart } from "./pie-chart"
import { ITEM_TYPE_LABEL } from "@helpers/select-options"

export const ProcessSection: FC = observer(() => {
  const { total } = ProcessTotalsStore

  const chartData = useMemo(
    () => types.map((type) => ({ id: type, label: ITEM_TYPE_LABEL[type], value: total[type] })),
    [total]
  )

  return (
    <Card shadow='sm' radius='sm' fullWidth className='bg-stone-100'>
      <CardBody className='flex-row justify-between'>
        <div className='h-28 w-28'>
          <PieChart data={chartData} />
        </div>

        <div className='flex flex-col'>
          <h3 className='text-gray-400 grow uppercase text-sm text-right'>{ItemStatus.Process}</h3>

          <div className='gap-2'>
            {types.map((type) => (
              <RowType key={type} type={type} value={total[type]} label={ITEM_TYPE_LABEL[type]} />
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  )
})

const types = values(ItemType)
