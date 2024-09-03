import { CardHeader, Divider, cn } from "@nextui-org/react"
import type { FC, PropsWithChildren } from "react"
import { StatusFilter } from "@/_components/main-content/card/header/status-filter"
import { type ItemStatusType, ItemColorByStatus } from "@constant"

interface Wrapper extends PropsWithChildren {
  statusType: ItemStatusType
}

export const Header: FC<Wrapper> = ({ children, statusType }) => {
  return (
    <CardHeader className='gap-2 border-b'>
      <Divider orientation='vertical' className={cn("w-1.5 h-6 rounded-md", ItemColorByStatus[statusType].bg)} />
      <span className='capitalize'>{statusType}</span>
      {children}
      <span className='grow' />
      <StatusFilter statusType={statusType} />
    </CardHeader>
  )
}
