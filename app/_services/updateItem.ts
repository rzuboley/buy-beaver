import { cloudRequest } from "@utils/axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { UpdateItemData } from "@constant"

const updateItem = async (id: string, data: Omit<UpdateItemData, "id"> = {}) => {
  try {
    await cloudRequest({ url: "/server/api", method: "PATCH", params: { id }, data })
  } catch (error) {
    console.error("Axios error:", error)
    throw error
  }
}

export const useUpdateItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, ...data }: UpdateItemData) => updateItem(id, data),
    onSuccess: (__, variables) => {
      queryClient.invalidateQueries({ queryKey: ["getItems", variables.oldStatus], exact: true })
      queryClient.invalidateQueries({ queryKey: ["getItems", variables.status], exact: true })
    }
  })
}
