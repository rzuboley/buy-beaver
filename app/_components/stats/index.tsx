import type { FC } from "react"
import { DoneSection } from "./done"
import { ExpensesSection } from "./expenses"
import { PendingSection } from "./pending"
import { Total } from "./total"

export const Stats: FC = () => {
  return (
    <div className='flex flex-col gap-3'>
      <Total />
      <ExpensesSection />
      <PendingSection />
      <DoneSection />
    </div>
  )
}
