import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cloudRequest } from "@utils/axios"
import type { AxiosRequestConfig } from "axios"
import { ItemStatus, type ItemData } from "@constant"

const createItem = async (data: AxiosRequestConfig["data"]) => {
  try {
    await cloudRequest({ url: "/server/api", method: "POST", data })
  } catch (error) {
    console.error("Axios error:", error)
    throw error
  }
}

export const useCreateItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Omit<ItemData, "id">) => createItem(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getItems", ItemStatus.Costs], exact: true })
  })
}
