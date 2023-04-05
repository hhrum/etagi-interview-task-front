import cn from 'classnames'

import { Typography } from '../../../../shared/ui'
import './index.style.scss'

export interface HeaderProps {
  className?: string
}

export function Header({ className = '' }: HeaderProps) {
  const ClassName = cn('header', className)

  return (
    <div className={ClassName}>
      <Typography className="header__title">Этажи</Typography>
    </div>
  )
}
