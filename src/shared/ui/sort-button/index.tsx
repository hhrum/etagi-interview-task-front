import cn from 'classnames'

import { Typography } from '../typography'
import './style.scss'

export interface SortingButtonProps {
  className?: string
  title: string
}

export function SortButton({ className = '', title }: SortingButtonProps) {
  const ClassName = cn('sort-button', className)

  return (
    <div className={ClassName}>
      <div className="sort-button__icon" />
      <Typography className="sort-button__title">{title}</Typography>
    </div>
  )
}
