"use client"

import { useState, type PropsWithChildren, FC } from "react"
import { EditItemModal } from "@modals/edit-item-modal"
import { MODAL, DEFAULT_STORE, ModalContext } from "@contexts/modal"

const MODAL_COMPONENT = { [MODAL.EDIT_ITEM]: EditItemModal }

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [store, setStore] = useState(DEFAULT_STORE)
  const { modalType, modalProps } = store || {}

  const hideModal = () => setStore(DEFAULT_STORE)
  const showModal = (modalType = "", modalProps = {}) => setStore({ modalType, modalProps })

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENT[modalType]
    return ModalComponent ? <ModalComponent {...modalProps} /> : null
  }

  return (
    <ModalContext.Provider value={{ store, showModal, hideModal }}>
      {children}
      {renderComponent()}
    </ModalContext.Provider>
  )
}
