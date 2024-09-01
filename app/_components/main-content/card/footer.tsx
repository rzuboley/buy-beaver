"use client"

import type { FC } from "react"
import { Button, CardFooter, Input } from "@nextui-org/react"
import { Plus } from "@icons/plus"
import { useForm, type SubmitHandler } from "react-hook-form"
import { type ItemData, ItemStatus, ItemType } from "@constant"
import { DropdownTypes } from "@/_components/main-content/card/item/dropdown-types"
import { useCreateItem } from "@services/createItem"

type Inputs = Omit<ItemData, "id">

export const Footer: FC = () => {
  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    watch,
    reset,
    formState: { isValid, errors }
  } = useForm<Inputs>({
    mode: "onChange",
    defaultValues: { title: "", price: undefined, type: ItemType.Pending, status: ItemStatus.Expenses }
  })

  const { mutate, isPending } = useCreateItem()

  const onSubmit: SubmitHandler<Inputs> = (data) => mutate(data, { onSuccess: () => reset() })

  const onSelect = ({ type }: ItemData) => setValue("type", type)

  return (
    <CardFooter className='border-t'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex gap-2 items-center'>
        <DropdownTypes isDisabled={isPending} onSelect={onSelect} item={{ type: watch("type") }} />

        <Input
          className='3/5'
          isClearable={true}
          onClear={() => resetField("title")}
          placeholder='Title'
          disabled={isPending}
          radius='sm'
          size='sm'
          variant='faded'
          {...(errors.title && { color: "danger" })}
          {...register("title", { required: true })}
        />

        <Input
          className='w-2/5 [&_input]:p-0'
          isClearable={true}
          disabled={isPending}
          onClear={() => resetField("price")}
          placeholder='0.00'
          radius='sm'
          size='sm'
          type='number'
          variant='faded'
          {...(errors.price && { color: "danger" })}
          {...register("price", {
            required: true,
            valueAsNumber: true,
            setValueAs: (v) => Number(v || 0).toFixed(2)
          })}
        />

        <Button
          type='submit'
          isIconOnly
          color='primary'
          size='sm'
          radius='sm'
          variant='flat'
          disabled={isPending || !isValid}
        >
          <Plus />
        </Button>
      </form>
    </CardFooter>
  )
}
