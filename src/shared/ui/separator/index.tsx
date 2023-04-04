import cn from 'classnames'

import './style.scss'

export interface SeparatorProps {
  className?: string
  vertical?: boolean
}

export function Separator({ className = '', vertical = false }: SeparatorProps) {
  const ClassName = cn(
    'separator',
    {
      'separator--vertical': vertical,
    },
    className,
  )

  return (
    <div className={ClassName}>
      <div className="separator__fill" />
    </div>
  )
}
