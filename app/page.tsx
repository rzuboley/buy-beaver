import { Header } from "@/_components/header"
import { Stats } from "@/_components/stats"
import { MainContent } from "@/_components/main-content"

export default function Home() {
  return (
    <div className='flex min-h-screen container m-auto'>
      <div className='w-1/4 flex-col p-2 hidden xl:flex'>
        <div className='bg-stone-600 grow p-4 rounded-md'>
          <Stats />
        </div>
      </div>

      <div className='w-full xl:w-3/4 flex flex-col'>
        <Header />
        <MainContent />
      </div>
    </div>
  )
}
