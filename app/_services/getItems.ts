import { cloudRequest } from "@utils/axios"
import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import type { ItemData } from "@constant"

const getItems = async (status: ItemData["status"]): Promise<ItemData[]> => {
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

export const useGetItems = (status: ItemData["status"]): UseQueryResult<ItemData[]> => {
  const data = useQuery<ItemData[]>({
    queryKey: ["getItems", status],
    queryFn: () => getItems(status),
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
    refetchOnMount: false
  })

  return data
}
