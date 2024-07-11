import type { FC } from "react"
import type { Icon } from "@icons/interfaces"

export const CirclePause: FC<Icon> = ({ width = "1rem", height = "1rem", currentColor = "currentColor", ...props }) => (
  <svg {...props} fill='none' height={height} viewBox='0 0 512 512' width={width} xmlns='http://www.w3.org/2000/svg'>
    <title>gear</title>
    <path
      d='M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24z'
      fill={currentColor}
    />
  </svg>
)
