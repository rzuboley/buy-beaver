import type { FC } from "react"
import type { Icon } from "@icons/interfaces"

export const Plus: FC<Icon> = ({ width = "1rem", height = "1rem", currentColor = "currentColor", ...props }) => (
  <svg {...props} fill='none' height={height} viewBox='0 0 448 512' width={width} xmlns='http://www.w3.org/2000/svg'>
    <title>plus</title>
    <path
      d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'
      fill={currentColor}
    />
  </svg>
)
