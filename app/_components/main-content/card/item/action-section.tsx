import type { FC } from "react"
import { ActionButton } from "@/_components/main-content/card/item/action-button"
import { Trash } from "@icons/trash"
import { ItemColorByStatus, ItemStatus, type ItemStatusType } from "@constant"
import { CirclePause } from "@icons/circle-pause"
import { CirclePlay } from "@icons/circle-play"
import { CircleStop } from "@icons/circle-stop"

interface ActionSection {
  onDelete: () => void
  onChangeStatus: () => void
  status: ItemStatusType
}

export const ActionSection: FC<ActionSection> = ({ onDelete, onChangeStatus, status }) => {
  return (
    <div className='flex gap-1'>
      {onChangeStatus && <ActionButton className={getColor(status)} onClick={onChangeStatus} icon={getIcon(status)} />}
      {onDelete && <ActionButton className='text-red-400' onClick={onDelete} icon={Trash} />}
    </div>
  )
}

const getColor = (status: ItemStatusType) => {
  switch (true) {
    case status === ItemStatus.Costs:
      return ItemColorByStatus.pending.text
    case status === ItemStatus.Pending:
      return ItemColorByStatus.done.text
    case status === ItemStatus.Done:
      return ItemColorByStatus.costs.text
    default:
      return ItemColorByStatus.costs.text
  }
}

const getIcon = (status: ItemStatusType) => {
  switch (true) {
    case status === ItemStatus.Costs:
      return CirclePause
    case status === ItemStatus.Pending:
      return CircleStop
    case status === ItemStatus.Done:
      return CirclePlay
    default:
      return CirclePlay
  }
}
