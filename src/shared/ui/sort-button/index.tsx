import cn from 'classnames'
import { useCallback } from 'react'

import { Sorting, SortingVariant } from '../../types'
import { SortIcon } from '../icons/sort-icon'
import { Typography } from '../typography'
import './style.scss'

export interface SortingButtonProps {
  className?: string
  title: string

  column: string
  sortingVariant: SortingVariant

  onClick: (sorting: Sorting) => void
}

export function SortButton({
  className = '',
  title,
  column,
  sortingVariant,
  onClick,
}: SortingButtonProps) {
  const ClassName = cn(
    'sort-button',
    {
      'sort-button--active': sortingVariant !== 'none',
    },
    className,
  )

  const handleClick = useCallback(() => {
    let variant: SortingVariant = 'none'
    if (sortingVariant === 'none') {
      variant = 'asc'
    }

    if (sortingVariant === 'asc') {
      variant = 'desc'
    }

    const sorting: Sorting = { column, variant }
    onClick(sorting)
  }, [column, onClick, sortingVariant])

  return (
    <div
      className={ClassName}
      onClick={handleClick}
    >
      <SortIcon
        className="sort-button__icon"
        variant={sortingVariant}
      />
      <Typography className="sort-button__title">{title}</Typography>
    </div>
  )
}
