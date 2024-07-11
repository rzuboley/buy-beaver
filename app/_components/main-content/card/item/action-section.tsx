import type { FC } from "react"
import { ActionButton } from "@/_components/main-content/card/item/action-button"
import { Trash } from "@icons/trash"
import { ItemColorByStatus } from "@/_helpers/constant"
import { CirclePause } from "@icons/circle-pause"

interface ActionSection {
  onDelete: () => void
  onChangeStatus: () => void
}

export const ActionSection: FC<ActionSection> = ({ onDelete, onChangeStatus }) => {
  return (
    <div className='flex gap-1'>
      {onChangeStatus && (
        <ActionButton className={ItemColorByStatus.pending.text} onClick={onChangeStatus} icon={CirclePause} />
      )}
      {onDelete && <ActionButton className='text-red-400' onClick={onDelete} icon={Trash} />}
    </div>
  )
}
