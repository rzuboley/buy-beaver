import { cloudRequest } from "@utils/axios"
import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import type { ItemData, ItemType, ItemStatusType } from "@constant"
import type { PeriodData } from "@stores"

interface ItemsResponse {
  _id: ItemType
  items: ItemData[]
}

const getItems = async (status: ItemStatusType, { month, year }: PeriodData): Promise<ItemsResponse[]> => {
  try {
    const {
      data: { data = [] } = {}
    } = await cloudRequest({ url: "/server/api", params: { month, year, status } })
    return data
  } catch (error) {
    console.error("Axios error:", error)
    throw error
  }
}

export const useGetItems = (
  status: ItemStatusType,
  { month, year }: PeriodData
): UseQueryResult<Record<ItemType, ItemData[]>> => {
  const data = useQuery({
    queryKey: ["getItems", status, month, year],
    queryFn: () => getItems(status, { month, year }),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
    refetchOnMount: false,
    select: (data) =>
      data.reduce(
        (acc, el) => {
          acc[el._id] = el.items
          return acc
        },
        {} as Record<ItemType, ItemData[]>
      )
  })

  return data
}
