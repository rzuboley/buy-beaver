import { cloudRequest } from "@utils/axios"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { ItemData } from "@constant"

const deleteItem = async (data: Pick<ItemData, "id" | "status">) => {
  try {
    await cloudRequest({ url: "/server/api", method: "DELETE", data })
  } catch (error) {
    console.error("Axios error:", error)
    throw error
  }
}

export const useDeleteItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Pick<ItemData, "id" | "status">) => deleteItem(data),
    onSuccess: (__, variables) =>
      queryClient.invalidateQueries({ queryKey: ["getItems", variables.status], exact: false })
  })
}
