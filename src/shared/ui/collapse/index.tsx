import cn from 'classnames'
import { useRef, useState } from 'react'

import { ChildrenComponent } from '../../types'
import { ArrowDownIcon } from '../icons'
import { Typography } from '../typography'
import './style.scss'

export interface CollapseProps {
  className?: string
  contentClassName?: string
  children?: ChildrenComponent
  title: string
}

export function Collapse({
  className = '',
  contentClassName = '',
  children,
  title,
}: CollapseProps) {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

  const ClassName = cn(
    'collapse',
    {
      'collapse--open': open,
    },
    className,
  )

  const ContentClassName = cn('collapse__content', contentClassName)

  const style = {
    maxHeight: open && contentRef.current ? contentRef.current?.offsetHeight : 0,
  }

  return (
    <div className={ClassName}>
      <div
        className="collapse__toggle"
        onClick={() => setOpen(!open)}
      >
        <ArrowDownIcon className="collapse__icon" />

        <Typography>{title}</Typography>
      </div>
      <div
        className="collapse__content-wrapper"
        style={style}
      >
        <div
          className={ContentClassName}
          ref={contentRef}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
