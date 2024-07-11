import type { FC } from "react"
import { Button } from "@nextui-org/react"
import type { Icon } from "@icons/interfaces"

interface ActionButton {
  onClick: () => void
  className: string
  icon: FC<Icon>
}

export const ActionButton: FC<ActionButton> = ({ onClick, className, icon: Icon }) => {
  return (
    <div className='group-hover/item:w-8 w-0 overflow-hidden transition-all flex justify-center'>
      <Button isIconOnly size='sm' radius='sm' variant='flat' className={className} onClick={onClick}>
        <Icon />
      </Button>
    </div>
  )
}
