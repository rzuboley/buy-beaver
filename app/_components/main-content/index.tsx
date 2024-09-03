import { Card } from "@/_components/main-content/card"
import { ItemStatus } from "@constant"

export const MainContent = () => {
  return (
    <main className='flex flex-wrap grow'>
      <Card statusType={ItemStatus.Expenses} withFooter />
      <Card statusType={ItemStatus.Process} />
      <Card statusType={ItemStatus.Done} />
    </main>
  )
}
