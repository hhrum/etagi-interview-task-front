import cn from 'classnames'

import { IPagination } from '../../types'
import { ArrowDownIcon } from '../icons'
import { Typography } from '../typography'
import './style.scss'

export interface PaginationProps {
  className?: string

  pagination: IPagination

  onPrev: (value: number) => void
  onNext: (value: number) => void
}

export function Pagination({ className = '', pagination, onPrev, onNext }: PaginationProps) {
  const ClassName = cn('pagination', className)

  return (
    <div className={ClassName}>
      {pagination.prev ? (
        <div
          className="pagination__button"
          onClick={() => onPrev(pagination.prev || pagination.current)}
        >
          <ArrowDownIcon className="pagination__prev" />
        </div>
      ) : null}
      <Typography className="pagination__current">{pagination.current}</Typography>
      {pagination.next ? (
        <div
          className="pagination__button"
          onClick={() => onNext(pagination.next || pagination.current)}
        >
          <ArrowDownIcon className="pagination__next" />
        </div>
      ) : null}
    </div>
  )
}
