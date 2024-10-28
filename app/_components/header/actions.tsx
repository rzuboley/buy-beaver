import { Divider } from "@nextui-org/divider"
import { UserButton } from "@clerk/nextjs"

export const Actions = () => {
  return (
    <>
      <Divider orientation='vertical' className='h-5' />
      <UserButton />
    </>
  )
}
