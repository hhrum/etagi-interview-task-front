import cn from 'classnames'
import { ButtonHTMLAttributes } from 'react'

import { Typography } from '../typography'
import './style.scss'

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  title?: string
  variant?: ButtonVariant
}

export function Button({ className = '', title, variant = 'secondary', ...other }: ButtonProps) {
  const ClassName = cn('button', `button--${variant}`, className)

  return (
    <button
      type="button"
      className={ClassName}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      <Typography>{title}</Typography>
    </button>
  )
}
