import { cloudRequest } from "@utils/axios"
import type { AxiosRequestConfig } from "axios"

export const createItem = async (data: AxiosRequestConfig["data"]) => {
  try {
    await cloudRequest({ url: "/server/api", method: "POST", data })
  } catch (error) {
    console.error("Axios error:", error)
    throw error
  }
}
