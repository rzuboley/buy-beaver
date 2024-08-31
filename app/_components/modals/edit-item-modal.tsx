import type { FC } from "react"
import { useModalContext } from "@contexts/modal"
import { Modal, ModalContent, ModalBody, ModalFooter, ModalHeader, Button, Input } from "@nextui-org/react"
import { Close } from "@icons/close"
import { FloppyDisk } from "@icons/floppy-disk"
import { useForm, type SubmitHandler } from "react-hook-form"
import { ItemData } from "@helpers/constant"

type Inputs = Pick<ItemData, "title" | "price">

export const EditItemModal: FC = () => {
  const { hideModal, store: { modalProps } } = useModalContext()

  const {
    register,
    handleSubmit,
    resetField,
    reset,
    formState: { isValid, errors }
  } = useForm<Inputs>({
    mode: "onChange",
    defaultValues: modalProps
  })

  // const onSubmit: SubmitHandler<Inputs> = (data) => mutate(data, { onSuccess: () => reset() })
  const isPending = false
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log("===", data)

  return (
    <Modal isOpen backdrop='blur' radius='sm' closeButton={<></>}>
      <ModalContent>
        {() => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Editing</ModalHeader>

            <ModalBody className='flex-row'>
              <Input
                isClearable
                onClear={() => resetField("title")}
                placeholder='Title'
                disabled={isPending}
                radius='sm'
                {...(errors.title && { color: "danger" })}
                {...register("title", { required: true })}
              />

              <Input
                isClearable
                disabled={isPending}
                onClear={() => resetField("price")}
                placeholder='0.00'
                radius='sm'
                type='number'
                {...(errors.price && { color: "danger" })}
                {...register("price", {
                  required: true,
                  valueAsNumber: true,
                  setValueAs: (v) => Number(v || 0).toFixed(2)
                })}
              />
            </ModalBody>

            <ModalFooter className='flex gap-3'>
              <Button
                size='sm'
                radius='sm'
                className="bg-gray-200 text-gray-400"
                isIconOnly
                onPress={hideModal}
              >
                <Close width="1.2rem" height="1.2rem" />
              </Button>

              <Button
                type='submit'
                disabled={isPending || !isValid}
                size='sm'
                radius='sm'
                color={isValid ? "success" : "primary"}
                className="text-white"
                isIconOnly
              >
                <FloppyDisk width="1.2rem" height="1.2rem" />
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  )
}
