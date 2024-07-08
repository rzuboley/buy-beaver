import { cloudRequest } from "@utils/axios"
import type { AxiosRequestConfig } from "axios"

export const createItem = async (data: AxiosRequestConfig["data"]) => {
  try {
    await cloudRequest({ url: "/api", method: "POST", data })
  } catch (error) {
    console.error("Axios error:", error)
    throw error
  }
}
