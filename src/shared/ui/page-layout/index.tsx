import cn from 'classnames'

import { ChildrenComponent } from '../../types'
import './style.scss'

export interface PageLayoutProps {
  className?: string
  children?: ChildrenComponent
}

export function PageLayout({ className = '', children }: PageLayoutProps) {
  const ClassName = cn('page-layout', className)

  return (
    <div className={ClassName}>
      <div className="page-layout__content">{children}</div>
    </div>
  )
}
