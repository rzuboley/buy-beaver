import type { FC, PropsWithChildren } from "react"
import { CardHeader, Divider, cn } from "@nextui-org/react"
import { type ItemStatusType, ItemColorByStatus } from "@constant"

import { StatusFilter } from "./status-filter"
import { Title } from "./title"
import { ActionDropdown } from "./action-dropdown"

interface Wrapper extends PropsWithChildren {
  statusType: ItemStatusType
}

export const Header: FC<Wrapper> = ({ children, statusType }) => {
  return (
    <CardHeader className='gap-2 border-b'>
      <Divider orientation='vertical' className={cn("w-1.5 h-6 rounded-md", ItemColorByStatus[statusType].bg)} />
      <Title statusType={statusType} />
      {children}
      <span className='grow' />
      <StatusFilter statusType={statusType} />
      {statusType === "expenses" && <ActionDropdown />}
    </CardHeader>
  )
}
