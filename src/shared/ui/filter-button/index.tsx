import cn from 'classnames'

import { Typography } from '../typography'
import './style.scss'

export interface FilterButtonProps {
  className?: string
  selectedCount?: number

  onClick?: () => void
}

export function FilterButton({ className = '', selectedCount, onClick }: FilterButtonProps) {
  const ClassName = cn('filter-button', className)

  return (
    <div
      className={ClassName}
      onClick={onClick}
    >
      <Typography className="filter-button__title">Фильтры</Typography>
      {selectedCount ? (
        <Typography className="filter-button__count">{selectedCount}</Typography>
      ) : null}
    </div>
  )
}
