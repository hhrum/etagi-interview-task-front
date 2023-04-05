import cn from 'classnames'

import { ChildrenComponent } from 'shared/types'
import { Image, Typography } from 'shared/ui'

import { Flat } from '../../model'
import { FlatInfoCell } from '../flat-info-cell'
import './style.scss'

export interface FlatCardProps {
  className?: string
  actionButton?: ChildrenComponent
  tools?: ChildrenComponent

  flat: Flat
}

export function FlatCard({ className = '', actionButton, tools, flat }: FlatCardProps) {
  const ClassName = cn('flat-card', className)
  const ToolsClassName = cn('flat-card__tools', `${className}__tools`)

  return (
    <div className={ClassName}>
      <Image
        className="flat-card__layout-image"
        src={flat.layoutImage}
      />
      <div className="flat-card__content">
        <div className="flat-card__info">
          <Typography
            className="flat-card__title"
            size={20}
          >
            Суходольская улица, 16
          </Typography>
          <FlatInfoCell
            title="Площадь"
            value={`${flat.totalArea} кв.м`}
          />
          <FlatInfoCell
            title="Этаж"
            value={flat.floor}
          />
          <FlatInfoCell
            title="Комнат"
            value={flat.rooms}
          />
        </div>
        <div className={ToolsClassName}>{tools}</div>
      </div>
      <div className="flat-card__footer">
        <Typography
          className="flat-card__price"
          size={20}
        >
          {`${flat.price.toLocaleString()} ₽`}
        </Typography>
        <div className="flat-card__button">{actionButton}</div>
      </div>
    </div>
  )
}
