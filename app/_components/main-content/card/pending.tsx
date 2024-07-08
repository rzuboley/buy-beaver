import { Card } from "@/_components/main-content/card"
import { ItemStatus } from "@constant"

export const Pending = () => {
  return (
    <Card title='Pending' type={ItemStatus.Pending}>
      content
    </Card>
  )
}
