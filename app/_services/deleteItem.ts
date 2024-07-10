import { cloudRequest } from "@utils/axios"
import { useMutation, type UseMutationResult, useQueryClient } from "@tanstack/react-query"
import type { ItemData } from "@constant"

export const deleteItem = async (data: Pick<ItemData, "id">) => {
  try {
    await cloudRequest({ url: "/server/api", method: "DELETE", data })
  } catch (error) {
    console.error("Axios error:", error)
    throw error
  }
}

export const useDeleteItem = (): UseMutationResult<void, unknown, string, unknown> => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: ItemData["id"]) => deleteItem({ id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getItems"], exact: true })
  })
}
