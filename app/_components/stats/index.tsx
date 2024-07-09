import { PieChart } from "@/_components/stats/pie-chart"
import { ItemColorByStatus, ItemStatus, type ItemStatusType, PIE_DATA } from "@constant"
import { Card, CardBody, cn } from "@nextui-org/react"

export const Stats = () => {
  return (
    <Card shadow='sm' radius='sm' fullWidth className='bg-stone-100'>
      <CardBody>
        <div className='h-36 w-36 m-auto mb-3'>
          <PieChart data={PIE_DATA} />
        </div>

        <div className='gap-5'>
          <Row type={ItemStatus.Costs} />
          <Row type={ItemStatus.Pending} />
          <Row type={ItemStatus.Done} />
        </div>
      </CardBody>
    </Card>
  )
}

const Row = ({ type }: { type: ItemStatusType }) => (
  <div className='flex items-center p-1 gap-2 text-xs uppercase'>
    <span className={cn("p-1.5 rounded-sm", ItemColorByStatus[type].bg)} />
    <span className='text-stone-500'>{type}:</span>
    <span className='text-stone-700'>{400}</span>
  </div>
)
