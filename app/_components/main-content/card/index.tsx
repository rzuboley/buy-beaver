import { Card as CardWrapper, CardBody, CardHeader, Divider, cn, Skeleton } from "@nextui-org/react"
import type { FC, PropsWithChildren } from "react"
import { Footer } from "@/_components/main-content/card/footer"
import { SelectFilter } from "@/_components/main-content/select-filter"
import { type ItemStatusType, ItemColorByStatus } from "@constant"

interface Wrapper extends PropsWithChildren {
  title: string
  type: ItemStatusType
  withFooter?: boolean
  isLoading?: boolean
}

export const Card: FC<Wrapper> = ({ title, type, children, isLoading = false, withFooter = false }) => {
  return (
    <div className='p-2 w-1/3'>
      <CardWrapper shadow='sm' radius='sm' fullWidth className='bg-stone-100 min-h-full'>
        <CardHeader className='gap-2 border-b'>
          <Divider orientation='vertical' className={cn("w-1.5 h-6 rounded-md", ItemColorByStatus[type].bg)} />
          {title}
          <span className='grow' />
          <SelectFilter />
        </CardHeader>

        <CardBody>{isLoading ? <Skeleton className='grow rounded-md' /> : children}</CardBody>

        {withFooter && <Footer />}
      </CardWrapper>
    </div>
  )
}
