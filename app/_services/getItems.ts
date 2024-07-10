import { cloudRequest } from "@utils/axios"
import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import type { ItemData } from "@constant"

const getItems = async (): Promise<ItemData[]> => {
  try {
    const {
      data: { data = [] } = {}
    } = await cloudRequest({ url: "/server/api" })
    return data
  } catch (error) {
    console.error("Axios error:", error)
    throw error
  }
}

export const useGetItems = (): UseQueryResult<ItemData[]> => {
  const data = useQuery<ItemData[]>({
    queryKey: ["getItems"],
    queryFn: getItems,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchInterval: false,
    refetchOnMount: false
  })

  return data
}
