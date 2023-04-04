import cn from 'classnames'
import { InputHTMLAttributes } from 'react'

import './style.scss'

export interface NumberFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export function NumberField({ className = '', ...other }: NumberFieldProps) {
  const ClassName = cn('number-field', className)

  return (
    <input
      type="number"
      className={ClassName}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    />
  )
}
