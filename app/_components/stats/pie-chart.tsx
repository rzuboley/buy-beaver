"use client"

import { type DatumId, ResponsivePie } from "@nivo/pie"
import { colors } from "@helpers/colors"
import type { FC } from "react"

interface Pie {
  data: any
}

export const PieChart: FC<Pie> = ({ data }) => (
  <ResponsivePie
    activeOuterRadiusOffset={3}
    cornerRadius={7}
    data={data}
    enableArcLinkLabels={false}
    enableArcLabels={false}
    innerRadius={0.55}
    margin={{ top: 3, left: 3, right: 3, bottom: 3 }}
    padAngle={1.5}
    sortByValue
    colors={getColor}
    tooltip={({ datum }) => <PieTooltip datum={datum} />}
  />
)

const getColor = ({ id }: { id: DatumId }) => {
  switch (true) {
    case id === "income":
      return colors.sky[400]
    case id === "spent":
      return colors.red[300]
    case id === "reserved":
      return colors.yellow[400]
    default:
      return colors.gray[200]
  }
}

export const PieTooltip: FC<{
  datum: any
}> = ({ datum }) => {
  return (
    <div className='bg-stone-100 border-stone-400 border py-1 px-2 rounded-md shadow-md flex gap-2 items-center'>
      <span className='text-stone-700 text-xs'>{datum.label}</span>
      <span className='text-stone-700 font-semibold text-sm'>{datum.value}</span>
    </div>
  )
}
