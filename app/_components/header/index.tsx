import { Logo } from "@/_components/header/logo"
import { Title } from "@/_components/header/title"
import { Actions } from "@/_components/header/actions"

export const Header = () => {
  return (
    <header className='p-2'>
      <div className='flex items-center p-3 gap-4 container m-auto bg-stone-100 rounded-md shadow-sm'>
        <Logo />
        <Title />

        <div className='grow' />

        <Actions />
      </div>
    </header>
  )
}
