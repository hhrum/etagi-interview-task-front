import cn from 'classnames'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeCurrentFlatPageAction, getFlatPagination } from 'entities/flat'

import { Pagination } from 'shared/ui'

import './style.scss'

export interface FlatsPaginationProps {
  className?: string
}

export function FlatsPagination({ className = '' }: FlatsPaginationProps) {
  const dispatch = useDispatch()
  const pagination = useSelector(getFlatPagination)

  const ClassName = cn('flats-pagination', className)

  const handleChangePage = useCallback(
    (value: number) => {
      dispatch(changeCurrentFlatPageAction(value))
    },
    [dispatch],
  )

  if ((pagination.total || 1) <= 1) {
    return null
  }

  return (
    <div className={ClassName}>
      <Pagination
        pagination={pagination}
        onPrev={handleChangePage}
        onNext={handleChangePage}
      />
    </div>
  )
}
