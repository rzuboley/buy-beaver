import type { FC } from "react"
import { ActionButton } from "@/_components/main-content/card/item/action-button"
import { Trash } from "@icons/trash"
import { ItemColorByStatus, ItemStatus, type ItemStatusType } from "@constant"
import { CirclePause } from "@icons/circle-pause"
import { CirclePlay } from "@icons/circle-play"
import { CircleStop } from "@icons/circle-stop"
import { PenToSquare } from "@icons/pen-to-square"

interface ActionSection {
  onDelete: () => void
  onEdit: () => void
  onChangeStatus: () => void
  status: ItemStatusType
}

export const ActionSection: FC<ActionSection> = ({ onDelete, onChangeStatus, onEdit, status }) => {
  return (
    <div className='flex gap-1'>
      {onChangeStatus && <ActionButton className={getColor(status)} onClick={onChangeStatus} icon={getIcon(status)} />}
      {onEdit && <ActionButton className='text-blue-500' onClick={onEdit} icon={PenToSquare} />}
      {onDelete && <ActionButton className='text-red-400' onClick={onDelete} icon={Trash} />}
    </div>
  )
}

const getColor = (status: ItemStatusType) =>
  ({
    [ItemStatus.Expenses]: ItemColorByStatus[ItemStatus.Process].text,
    [ItemStatus.Process]: ItemColorByStatus[ItemStatus.Done].text,
    [ItemStatus.Done]: ItemColorByStatus[ItemStatus.Expenses].text
  })[status]

const getIcon = (status: ItemStatusType) =>
  ({
    [ItemStatus.Expenses]: CirclePause,
    [ItemStatus.Process]: CircleStop,
    [ItemStatus.Done]: CirclePlay
  })[status]
