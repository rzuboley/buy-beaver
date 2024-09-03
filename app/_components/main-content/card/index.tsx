import { Card as CardWrapper } from "@nextui-org/react"
import type { FC } from "react"
import { Header } from "@/_components/main-content/card/header"
import { Body } from "@/_components/main-content/card/body"
import { Footer } from "@/_components/main-content/card/footer"
import type { ItemStatusType } from "@constant"

interface Card {
  statusType: ItemStatusType
  withFooter?: boolean
}

export const Card: FC<Card> = ({ statusType, withFooter = false }) => {
  return (
    <div className='p-2 w-1/3'>
      <CardWrapper shadow='sm' radius='sm' fullWidth className='bg-stone-100 min-h-full'>
        <Header statusType={statusType} />
        <Body statusType={statusType} />
        {withFooter && <Footer />}
      </CardWrapper>
    </div>
  )
}
