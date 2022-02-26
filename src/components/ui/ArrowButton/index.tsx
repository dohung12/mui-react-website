import React from 'react'

interface Props {
  stylingClass?: string | undefined
  width: number | string
  height: number | string
  fill: string
}

export default function ButtonArrow({
  stylingClass,
  width,
  height,
  fill,
}: Props) {
  return (
    <svg
      className={stylingClass}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 18 18'
    >
      <path d='M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z' />
    </svg>
  )
}
