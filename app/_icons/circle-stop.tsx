import type { FC } from "react"
import type { Icon } from "@icons/interfaces"

export const CircleStop: FC<Icon> = ({ width = "1rem", height = "1rem", currentColor = "currentColor", ...props }) => (
  <svg {...props} fill='none' height={height} viewBox='0 0 512 512' width={width} xmlns='http://www.w3.org/2000/svg'>
    <title>gear</title>
    <path
      d='M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm192-96H320c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32z'
      fill={currentColor}
    />
  </svg>
)
