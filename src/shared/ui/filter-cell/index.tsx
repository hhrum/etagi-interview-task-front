import cn from 'classnames'

import { ChildrenComponent } from '../../types'
import { Typography } from '../typography'
import './style.scss'

export interface FilterCellProps {
  className?: string
  children?: ChildrenComponent
  title?: string
}

export function FilterCell({ className = '', children, title }: FilterCellProps) {
  const ClassName = cn('filter-cell', className)

  return (
    <div className={ClassName}>
      <Typography className="filter-cell__title">{title}</Typography>
      <div className="filter-cell__inputs">{children}</div>
    </div>
  )
}
