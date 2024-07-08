import { Card } from "@/_components/main-content/card"
import { ItemStatus } from "@constant"

export const Done = () => {
  return (
    <Card title='Done' type={ItemStatus.Done}>
      content
    </Card>
  )
}
