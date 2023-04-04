import cn from 'classnames'

import { ImageUrl } from '../../types'
import './style.scss'

export interface ImageProps {
  className?: string

  src: ImageUrl
  alt?: string
}

export function Image({ className = '', src, alt = 'asdasd' }: ImageProps) {
  const ClassName = cn('image', className)

  return (
    <img
      className={ClassName}
      src={src}
      alt={alt}
    />
  )
}
