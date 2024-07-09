import { cloudRequest } from "@utils/axios"
import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import type { ItemType } from "@helpers/constant"

export interface ItemData {
  _id: string
  title: string
  price: number
  type: ItemType
}

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
    queryFn: getItems
  })

  return data
}
