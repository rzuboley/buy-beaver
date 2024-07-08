import axios, { type AxiosRequestConfig } from "axios"

const cloudInstance = axios.create()

export const cloudRequest = (props: AxiosRequestConfig) =>
  cloudInstance({
    method: "GET",
    baseURL: process.env.CLOUD_HOST,
    headers: {
      Pragma: "no-cache",
      Expires: "Sat, 01 Jan 2000 00:00:00 GMT",
      "Cache-Control": "no-cache"
    },
    ...props
  })
