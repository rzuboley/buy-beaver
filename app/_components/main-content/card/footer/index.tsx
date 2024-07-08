"use client"

import type { FC } from "react"
import { Input } from "@nextui-org/input"
import { Button, CardFooter, type MenuProps } from "@nextui-org/react"
import { Plus } from "@icons/plus"
import { useForm, type SubmitHandler } from "react-hook-form"
import { ItemType } from "@constant"
import { DropdownTypes } from "@/_components/main-content/card/footer/dropdown-types"
import { createItem } from "@services/createItem"

type Inputs = {
  title: string
  price: number
  type: ItemType
}

export const Footer: FC = () => {
  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    watch,
    formState: { isValid, errors }
  } = useForm<Inputs>({ mode: "onChange", defaultValues: { title: "", price: undefined, type: ItemType.Pending } })

  const onSubmit: SubmitHandler<Inputs> = (data) => createItem(data)

  const onSelect: MenuProps["onAction"] = (value) => setValue("type", value as ItemType)

  return (
    <CardFooter className='border-t'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex gap-2 items-center'>
        <DropdownTypes onSelect={onSelect} value={watch("type")} />

        <Input
          className='3/5'
          isClearable={true}
          onClear={() => resetField("title")}
          placeholder='Title'
          radius='sm'
          size='sm'
          variant='faded'
          {...(errors.title && { color: "danger" })}
          {...register("title", { required: true })}
        />

        <Input
          className='w-2/5 [&_input]:p-0'
          isClearable={true}
          onClear={() => resetField("price")}
          placeholder='0.00'
          radius='sm'
          size='sm'
          type='number'
          variant='faded'
          {...(errors.price && { color: "danger" })}
          {...register("price", { required: true })}
        />

        <Button type='submit' isIconOnly color='primary' size='sm' radius='sm' variant='flat' disabled={!isValid}>
          <Plus />
        </Button>
      </form>
    </CardFooter>
  )
}
