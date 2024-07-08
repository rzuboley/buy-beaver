import { Card as CardWrapper, CardBody, CardHeader, Divider } from "@nextui-org/react"
import type { FC, PropsWithChildren } from "react"
import { Footer } from "@/_components/main-content/card/footer"
import { SelectFilter } from "@/_components/main-content/select-filter"
import cn from "classnames"
import { type ItemStatusType, ItemStatus } from "@constant"

interface Wrapper extends PropsWithChildren {
  title: string
  type: ItemStatusType
  withFooter?: boolean
}

export const Card: FC<Wrapper> = ({ title, type, children, withFooter = false }) => {
  return (
    <div className='p-2 w-1/3'>
      <CardWrapper shadow='sm' radius='sm' fullWidth className='bg-stone-100 min-h-full'>
        <CardHeader className='gap-2 border-b'>
          <Divider
            orientation='vertical'
            className={cn("w-1.5 h-6 rounded-md", {
              "bg-success": type === ItemStatus.Done,
              "bg-warning": type === ItemStatus.Pending,
              "bg-red-500": type === ItemStatus.Costs
            })}
          />
          {title}
          <span className='grow' />
          <SelectFilter />
        </CardHeader>

        <CardBody>{children}</CardBody>

        {withFooter && <Footer />}
      </CardWrapper>
    </div>
  )
}
