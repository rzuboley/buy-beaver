import pick from "lodash/pick"
import type { ItemData } from "@helpers/constant"
import { Close } from "@icons/close"
import { FloppyDisk } from "@icons/floppy-disk"
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Input,
  Select,
  type SelectProps
} from "@nextui-org/react"
import { useCallback, type FC } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useModalContext } from "@contexts/modal"
import { useUpdateItem } from "@services/updateItem"
import { MONTH_OPTIONS, YEAR_OPTIONS } from "@helpers/select-options"

type Inputs = Pick<ItemData, "title" | "price" | "id" | "status">

export const EditItemModal: FC = () => {
  const {
    hideModal,
    store: {
      modalProps: { item }
    }
  } = useModalContext()
  const { mutate: updateItem, isPending } = useUpdateItem()

  const {
    register,
    handleSubmit,
    resetField,
    formState: { isValid, errors }
  } = useForm<Inputs>({
    mode: "onChange",
    defaultValues: pick(item, ["title", "price", "id", "status"])
  })

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    (data) => updateItem(data, { onSuccess: hideModal }),
    [updateItem, hideModal]
  )

  return (
    <Modal isOpen backdrop='blur' radius='sm' closeButton={<i className='hidden' />}>
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

              {/* <Select
                {...selectProps}
                aria-label='Select month'
                items={MONTH_OPTIONS}
                defaultSelectedKeys={[]}
                className='w-32'
                onSelectionChange={onMonthChange}
              >
                {({ label, key }) => <SelectItem key={key}>{label}</SelectItem>}
              </Select> */}
            </ModalBody>

            <ModalFooter className='flex gap-3'>
              <Button size='sm' radius='sm' className='bg-gray-200 text-gray-400' isIconOnly onPress={hideModal}>
                <Close width='1.2rem' height='1.2rem' />
              </Button>

              <Button
                isLoading={isPending}
                type='submit'
                disabled={isPending || !isValid}
                size='sm'
                radius='sm'
                color={isValid ? "success" : "primary"}
                className='text-white'
                isIconOnly
              >
                <FloppyDisk width='1.2rem' height='1.2rem' />
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  )
}

const selectProps = {
  disallowEmptySelection: true,
  size: "sm",
  variant: "bordered",
  radius: "sm"
} as SelectProps
