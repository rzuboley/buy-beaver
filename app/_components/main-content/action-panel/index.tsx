import type { FC } from "react"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/react"
import { Plus } from "@icons/plus"
// import cn from "classnames"

export const ActionPanel: FC = () => {
  return (
    <div className='p-3 flex gap-2 items-center'>
      <Input
        variant='faded'
        size='sm'
        radius='sm'
        value={""}
        placeholder='Title'
        isClearable
        type='text'
        className='3/5'
      />
      <Input
        variant='faded'
        size='sm'
        radius='sm'
        value={""}
        isClearable
        placeholder='0.00'
        type='number'
        className='w-2/5 [&_input]:p-0'
      />
      <Button isIconOnly color='primary' size='sm'>
        <Plus />
      </Button>
    </div>
  )
}
