import cn from 'classnames'

import { ChildrenComponent } from 'shared/types'

import './style.scss'

type TypographySize = 16 | 20
type TypographyTagCanBe = 'div' | 'span'

export interface TypographyProps {
  className?: string
  children?: ChildrenComponent
  tagIs?: TypographyTagCanBe

  size?: TypographySize
}

export function Typography({
  className = '',
  tagIs = 'div',
  children = null,
  size = 16,
}: TypographyProps) {
  const ClassName = cn('typography', `typography--${size}`, className)

  const WrapperComponent = tagIs

  return <WrapperComponent className={ClassName}>{children}</WrapperComponent>
}
