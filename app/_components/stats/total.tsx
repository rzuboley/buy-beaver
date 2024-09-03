"use client"

import type { FC } from "react"
import { Card, CardBody } from "@nextui-org/react"
import { ItemStatus } from "@constant"
import { PieChart } from "@/_components/stats/pie-chart"
import { ExpenseTotalsStore, ProcessTotalsStore, DoneTotalsStore } from "@stores"
import { observer } from "mobx-react-lite"
import { RowStatus } from "./row"
import values from "lodash/values"

export const Total: FC = observer(() => {
  const total = {
    [ItemStatus.Expenses]: ExpenseTotalsStore.totalAmount,
    [ItemStatus.Process]: ProcessTotalsStore.totalAmount,
    [ItemStatus.Done]: DoneTotalsStore.totalAmount
  }

  const chartData = values(ItemStatus).map((status) => ({
    id: status,
    label: status.toUpperCase(),
    value: total[status]
  }))

  return (
    <Card shadow='sm' radius='sm' fullWidth className='bg-stone-100'>
      <CardBody className='flex-row justify-between'>
        <div className='h-28 w-28'>
          <PieChart data={chartData} />
        </div>

        <div className='flex flex-col'>
          <h3 className='text-gray-400 grow uppercase text-sm text-right'>Total</h3>

          <div className='gap-2'>
            <RowStatus type={ItemStatus.Expenses} value={total[ItemStatus.Expenses]} label={ItemStatus.Expenses} />
            <RowStatus type={ItemStatus.Process} value={total[ItemStatus.Process]} label={ItemStatus.Process} />
            <RowStatus type={ItemStatus.Done} value={total[ItemStatus.Done]} label={ItemStatus.Done} />
          </div>
        </div>
      </CardBody>
    </Card>
  )
})
