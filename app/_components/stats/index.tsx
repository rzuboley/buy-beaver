import type { FC } from "react"
import { DoneSection } from "./done"
import { ExpensesSection } from "./expenses"
import { ProcessSection } from "./process"
import { Total } from "./total"

export const Stats: FC = () => {
  return (
    <div className='flex flex-col gap-3'>
      <Total />
      <ExpensesSection />
      <ProcessSection />
      <DoneSection />
    </div>
  )
}
