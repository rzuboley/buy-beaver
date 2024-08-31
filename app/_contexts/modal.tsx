import { createContext, useContext } from "react"

export const MODAL = { EDIT_ITEM: "EDIT_ITEM_MODAL" }
export const DEFAULT_STORE = { modalType: "", modalProps: {} } as {
  modalType: string
  modalProps: Record<string, any>
}

export const ModalContext = createContext({
  store: DEFAULT_STORE,
  showModal: (type = "Modal", {}) => console.warn("TODO", type),
  hideModal: () => console.warn("TODO")
})

export const useModalContext = () => useContext(ModalContext)
