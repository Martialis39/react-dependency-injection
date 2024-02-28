import { createContext, useContext } from "react"
import { ICountApi } from "../api/types"

export const ApiContext = createContext<ICountApi | null>(null)

export const useApi = () => {
  return useContext(ApiContext)
}
