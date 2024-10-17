"use client"

import { Select, SelectItem, type SelectProps } from "@nextui-org/react"
import type { FC } from "react"
import { observer } from "mobx-react-lite"
import { PeriodDateStore } from "@stores"
import { MONTH_OPTIONS, YEAR_OPTIONS } from "@helpers/select-options"

const onMonthChange = ([month]: any) => PeriodDateStore.setDate({ month })

export const Title: FC = observer(() => {
  return (
    <h1 className='flex items-center gap-2'>
      <Select
        {...selectProps}
        aria-label='Select month'
        items={MONTH_OPTIONS}
        defaultSelectedKeys={[PeriodDateStore.periodDate.month]}
        className='w-32'
        onSelectionChange={onMonthChange}
      >
        {({ label, key }) => <SelectItem key={key}>{label}</SelectItem>}
      </Select>

      <Select
        {...selectProps}
        aria-label='Select year'
        items={YEAR_OPTIONS}
        defaultSelectedKeys={[PeriodDateStore.periodDate.year]}
        className='w-24'
        isDisabled
      >
        {({ label, key }) => <SelectItem key={key}>{label}</SelectItem>}
      </Select>
    </h1>
  )
})

const selectProps = {
  disallowEmptySelection: true,
  size: "sm",
  variant: "bordered",
  radius: "sm"
} as SelectProps
