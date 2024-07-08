import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import type { FC, PropsWithChildren } from "react"
import { ActionPanel } from "@/_components/main-content/action-panel"
import cn from "classnames"

enum ItemStatus {
  Done = "done",
  Pending = "pending",
  Costs = "costs"
}

enum ItemType {
  Food = "food",
  HomeOther = "home-other",
  Fees = "fees",
  Trash = "trash"
}

interface Wrapper extends PropsWithChildren {
  title: string
  type: ItemStatus
}

export const Wrapper: FC<Wrapper> = ({ title, type, children }) => {
  return (
    <div className='p-2 w-1/3'>
      <Card shadow='sm' radius='sm' fullWidth className='bg-stone-100 min-h-full'>
        <CardHeader className='gap-2'>
          <Divider
            orientation='vertical'
            className={cn("w-1.5 h-6 rounded-md", {
              "bg-success": type === ItemStatus.Done,
              "bg-warning": type === ItemStatus.Pending,
              "bg-red-500": type === ItemStatus.Costs
            })}
          />
          {title}
        </CardHeader>
        <Divider className='w-[95%] m-auto' />
        <ActionPanel />
        <CardBody>{children}</CardBody>
      </Card>
    </div>
  )
}
