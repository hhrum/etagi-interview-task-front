import cn from 'classnames'

import { ChildrenComponent } from 'shared/types'

import './index.style.scss'

export interface HeaderProps {
  className?: string

  left?: ChildrenComponent
  children?: ChildrenComponent
  right?: ChildrenComponent
}

export function Header({ className = '', left = null, children, right = null }: HeaderProps) {
  const ClassName = cn('header', className)

  return (
    <div className={ClassName}>
      <div className="header__left">{left}</div>
      <div className="header__center">{children}</div>
      <div className="haeder__right">{right}</div>
    </div>
  )
}
