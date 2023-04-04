import cn from 'classnames'

import { ChildrenComponent } from '../../types'
import './style.scss'

export interface ModalController {
  isOpen: boolean
  open: () => void
  close: () => void
  zIndex: number
}

export interface ModalProps {
  className?: string
  wrapperClassName?: string
  children?: ChildrenComponent
  controller: ModalController
}

export function Modal({
  className = '',
  wrapperClassName = '',
  children = null,
  controller,
}: ModalProps) {
  const WrapperClassName = cn(
    'modal-wrapper',
    {
      'modal-wrapper--hide': !controller.isOpen,
    },
    wrapperClassName,
  )

  const ClassName = cn(
    'modal',
    {
      'modal--hide': !controller.isOpen,
    },
    className,
  )

  return (
    <div
      className={WrapperClassName}
      style={{ zIndex: controller.zIndex }}
      onClick={() => controller.close()}
    >
      <div
        className={ClassName}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
