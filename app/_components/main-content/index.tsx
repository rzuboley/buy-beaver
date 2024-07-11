import { Card } from "@/_components/main-content/card"
import { ItemStatus } from "@constant"

export const MainContent = () => {
  return (
    <main className='flex flex-wrap grow'>
      <Card title='Costs' statusType={ItemStatus.Costs} withFooter />
      <Card title='Pending' statusType={ItemStatus.Pending} />
      <Card title='Done' statusType={ItemStatus.Done} />
    </main>
  )
}
