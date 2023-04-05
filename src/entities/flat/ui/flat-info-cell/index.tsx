import cn from 'classnames'

import { Typography } from 'shared/ui'

import './style.scss'

export interface FlatInfoCellProps {
  className?: string

  title: string
  value: string | number
}

export function FlatInfoCell({ className = '', title, value }: FlatInfoCellProps) {
  const ClassName = cn('flat-info-cell', className)

  return (
    <Typography className={ClassName}>
      <Typography
        tagIs="span"
        className="flat-info-cell__title"
      >
        {`${title}: `}
      </Typography>
      <Typography
        tagIs="span"
        className="flat-info-cell__value"
      >
        {value}
      </Typography>
    </Typography>
  )
}
