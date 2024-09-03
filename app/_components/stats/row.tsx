"use client"

import type { FC } from "react"
import { cn } from "@nextui-org/react"
import { ItemColorByStatus, ItemColorByType, type ItemType, type ItemStatusType } from "@constant"
import { formatAmount } from "@helpers/formatting"

export const RowStatus: FC<RowStatus> = (props) => <Row {...props} color={ItemColorByStatus[props.type].bg} />
export const RowType: FC<RowType> = (props) => <Row {...props} color={ItemColorByType[props.type].bg} />

const Row: FC<Row> = ({ value, label, color }) =>
  value ? (
    <div className='flex items-center p-1 gap-2 text-xs capitalize'>
      <span className={cn("p-1.5 rounded-sm", color)} />
      <span className='text-stone-500'>{label}:</span>
      <span className='text-stone-700'>{formatAmount(value)}</span>
    </div>
  ) : null

interface Props {
  value: number
  label: string
}

interface Row extends Props {
  color: string
}

interface RowStatus extends Props {
  type: ItemStatusType
}

interface RowType extends Props {
  type: ItemType
}
