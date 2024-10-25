import type { FC } from "react"
import type { Icon } from "@icons/interfaces"

export const EllipsisVertical: FC<Icon> = ({
  width = "1rem",
  height = "1rem",
  currentColor = "currentColor",
  ...props
}) => (
  <svg {...props} fill='none' height={height} viewBox='0 0 128 512' width={width} xmlns='http://www.w3.org/2000/svg'>
    <title>ellipsis-vertical</title>
    <path
      d='M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z'
      fill={currentColor}
    />
  </svg>
)
