import type { FC } from "react"
import { Button } from "@nextui-org/react"

import { Trash } from "@icons/trash"

interface ActionSection {
  onDelete: () => void
}

export const ActionSection: FC<ActionSection> = ({ onDelete }) => {
  return (
    <div className='flex group-hover/item:w-8 gap-1 w-0 overflow-hidden transition-all'>
      {onDelete && (
        <Button isIconOnly size='sm' radius='sm' variant='flat' className='text-red-400' onClick={onDelete}>
          <Trash />
        </Button>
      )}
    </div>
  )
}
