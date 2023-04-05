import cn from 'classnames'

import { NumberField } from '../number-field'
import { Typography } from '../typography'
import './style.scss'

interface RangeInputSettings {
  min?: number
  max?: number
}

export interface RangeFilterProps {
  className?: string
  fromSettings?: RangeInputSettings
  toSettings?: RangeInputSettings

  fromValue?: number | string | null
  toValue?: number | string | null
  onUpdateFrom: (value: number) => void
  onUpdateTo: (value: number) => void
}

export function RangeFilterFields({
  className = '',
  fromSettings,
  toSettings,
  fromValue,
  toValue,
  onUpdateFrom,
  onUpdateTo,
}: RangeFilterProps) {
  const ClassName = cn('range-filter-fields', className)

  return (
    <div className={ClassName}>
      <Typography>От</Typography>
      <NumberField
        className="range-filter-fields__input"
        min={fromSettings?.min}
        max={fromSettings?.max}
        value={fromValue !== null && fromValue !== undefined ? fromValue : ''}
        onUpdate={onUpdateFrom}
      />
      <Typography>До</Typography>
      <NumberField
        className="range-filter-fields__input"
        min={toSettings?.min}
        max={toSettings?.max}
        value={toValue !== null && toValue !== undefined ? toValue : ''}
        onUpdate={onUpdateTo}
      />
    </div>
  )
}
