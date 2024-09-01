import { cloudRequest } from "@utils/axios"
import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import type { ItemData, ItemType, ItemStatusType } from "@constant"

interface ItemsResponse {
  _id: ItemType
  items: ItemData[]
}

const getItems = async (status: ItemStatusType): Promise<ItemsResponse[]> => {
  try {
    const {
      data: { data = [] } = {}
    } = await cloudRequest({ url: "/server/api", params: { status } })
    return data
  } catch (error) {
    console.error("Axios error:", error)
    throw error
  }
}

export const useGetItems = (status: ItemStatusType): UseQueryResult<Record<ItemType, ItemData[]>> => {
  const data = useQuery({
    queryKey: ["getItems", status],
    queryFn: () => getItems(status),
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
