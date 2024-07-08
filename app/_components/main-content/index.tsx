import { Costs } from "@/_components/main-content/costs"
import { Pending } from "@/_components/main-content/pending"
import { Done } from "@/_components/main-content/done"

export const MainContent = () => {
  return (
    <main className='flex flex-wrap grow'>
      <Costs />
      <Pending />
      <Done />
    </main>
  )
}
