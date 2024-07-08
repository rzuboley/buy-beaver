import { PieChart } from "@/_components/stats/pie-chart"
import { AmountType, PIE_DATA } from "@constant"
import { Card, CardBody } from "@nextui-org/react"
import cn from "classnames"

export const Stats = () => {
  return (
    <Card shadow='sm' radius='sm' fullWidth className='bg-stone-100'>
      <CardBody>
        <div className='h-36 w-36 m-auto mb-3'>
          <PieChart data={PIE_DATA} />
        </div>

        <div className='gap-5'>
          <Row type={AmountType.Income} />
          <Row type={AmountType.Reserved} />
          <Row type={AmountType.Spent} />
        </div>
      </CardBody>
    </Card>
  )
}

const Row = ({ type }: { type: AmountType }) => (
  <div className='flex items-center p-1 gap-2 text-xs uppercase'>
    <span
      className={cn("p-1.5 rounded-sm", {
        "bg-sky-400": type === AmountType.Income,
        "bg-yellow-400": type === AmountType.Reserved,
        "bg-red-300": type === AmountType.Spent
      })}
    />
    <span className='text-stone-500'>{type}:</span>
    <span className='text-stone-700'>{400}</span>
  </div>
)
