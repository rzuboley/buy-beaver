"use client"

import type { FC } from "react"
import { ItemStatus, type ItemStatusType } from "@constant"
import { ExpenseTotalsStore, ProcessTotalsStore, DoneTotalsStore } from "@stores"
import { observer } from "mobx-react-lite"
import { Badge, type BadgeProps } from "@nextui-org/react"
import { formatAmount } from "@helpers/formatting"

export const Title: FC<Props> = ({ statusType }) => {
  switch (statusType) {
    case ItemStatus.Expenses:
      return <ExpenseTitle />
    case ItemStatus.Process:
      return <ProcessTitle />
    case ItemStatus.Done:
      return <DoneTitle />
    default:
      throw "Incorrect Item status type"
  }
}

const ExpenseTitle: FC = observer(() => {
  const { totalAmount } = ExpenseTotalsStore

  return (
    <Badge {...badgeProps} content={formatAmount(totalAmount, { currency: "UAH" })} color='primary'>
      <span className='capitalize'>{ItemStatus.Expenses}</span>
    </Badge>
  )
})

const ProcessTitle: FC = observer(() => {
  const { totalAmount } = ProcessTotalsStore

  return (
    <Badge {...badgeProps} content={formatAmount(totalAmount, { currency: "UAH" })} color='warning'>
      <span className='capitalize'>{ItemStatus.Process}</span>
    </Badge>
  )
})

const DoneTitle: FC = observer(() => {
  const { totalAmount } = DoneTotalsStore

  return (
    <Badge {...badgeProps} content={formatAmount(totalAmount, { currency: "UAH" })} color='danger'>
      <span className='capitalize'>{ItemStatus.Done}</span>
    </Badge>
  )
})

const badgeProps = { showOutline: false, size: "sm", variant: "faded" } as BadgeProps

interface Props {
  statusType: ItemStatusType
}
