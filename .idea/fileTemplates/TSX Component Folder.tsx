import cn from 'classnames'

import './style.scss'

export interface ${ComponentName}Props {
  className?: string
}

export function ${ComponentName}({ className = '' }: ${ComponentName}Props) {
  const ClassName = cn('${NAME}', className)

  return <div className={ClassName}>same</div>
}
