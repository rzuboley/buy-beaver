
import { Selects } from "./selects"
import { Logo } from "@icons/logo"
import { Divider } from "@nextui-org/divider"
import { UserButton } from "@clerk/nextjs"

export const Header = () => {
  return (
    <header className='p-2'>
      <div className='flex items-center p-3 gap-4 container m-auto bg-stone-100 rounded-md shadow-sm'>
        <div className='rounded-lg border-[0.15rem] border-stone-600 text-stone-600 p-1'>
          <Logo height='1rem' width='1rem' />
        </div>

        <Selects />

        <div className='grow' />

        <Divider orientation='vertical' className='h-5' />
        <UserButton />
      </div>
    </header>
  )
}
