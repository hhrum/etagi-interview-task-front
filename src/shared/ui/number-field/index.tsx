import cn from 'classnames'
import { ChangeEvent, InputHTMLAttributes, useCallback } from 'react'

import './style.scss'

export interface NumberFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onUpdate?: (value: number) => void
}

export function NumberField({
  className = '',
  onUpdate = () => null,
  min,
  max,
  value,
  ...other
}: NumberFieldProps) {
  const ClassName = cn('number-field', className)

  const handelChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (other.onChange) {
        other.onChange(e)
      }

      if (e.target.value !== undefined) {
        if (min !== undefined && +e.target.value < +min) {
          onUpdate(+min)
          return
        }

        if (max !== undefined && +e.target.value > +max) {
          onUpdate(+max)
          return
        }

        onUpdate(+e.target.value)
      }
    },
    [max, min, onUpdate, other],
  )

  return (
    <input
      type="number"
      className={ClassName}
      min={min}
      max={max}
      value={value}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
      onChange={handelChange}
    />
  )
}
