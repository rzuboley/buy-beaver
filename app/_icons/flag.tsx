import type { FC } from "react"
import type { Icon } from "@icons/interfaces"

export const Flag: FC<Icon> = ({ width = "1rem", height = "1rem", currentColor = "currentColor", ...props }) => (
  <svg {...props} fill='none' height={height} viewBox='0 0 512 512' width={width} xmlns='http://www.w3.org/2000/svg'>
    <title>flag</title>
    <path
      d='M91.7 96C106.3 86.8 116 70.5 116 52C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 3 0 352 0 64 64 0 0-64 373.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L91.7 96z'
      fill={currentColor}
    />
  </svg>
)
