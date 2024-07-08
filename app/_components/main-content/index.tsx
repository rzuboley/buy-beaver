import { Costs } from "@/_components/main-content/card/costs"
import { Pending } from "@/_components/main-content/card/pending"
import { Done } from "@/_components/main-content/card/done"

export const MainContent = () => {
  return (
    <main className='flex flex-wrap grow'>
      <Costs />
      <Pending />
      <Done />
    </main>
  )
}
