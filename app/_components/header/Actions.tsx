import { Divider } from "@nextui-org/divider"
import { Avatar } from "@nextui-org/avatar"

export const Actions = () => {
  return (
    <>
      <Divider orientation='vertical' className='h-5' />
      <Avatar isBordered radius='sm' size='sm' isDisabled name='Beaver' />
    </>
  )
}
