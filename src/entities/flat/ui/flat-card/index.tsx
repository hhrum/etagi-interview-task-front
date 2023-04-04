import cn from 'classnames'

import { ChildrenComponent } from 'shared/types'
import { Typography } from 'shared/ui'
import { Image } from 'shared/ui/image'

import { Flat } from '../../model'
import { FlatInfoCell } from '../flat-info-cell'
import './style.scss'

export interface FlatCardProps {
  className?: string
  actionButton?: ChildrenComponent
  tools?: ChildrenComponent

  flat?: Flat
}

const mockUrl =
  'https://cdn.esoft.digital/content/layouts//cluster/layouts/18/0c/e293cb975e87b72b' +
  '6fba22106422e03e9f8b0c18.png'

export function FlatCard({ className = '', actionButton, tools, flat }: FlatCardProps) {
  const ClassName = cn('flat-card', className)
  const ToolsClassName = cn('flat-card__tools', `${className}__tools`)

  return (
    <div className={ClassName}>
      <Image
        className="flat-card__layout-image"
        src={mockUrl}
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
            value="100 кв.м"
          />
          <FlatInfoCell
            title="Этаж"
            value="1"
          />
          <FlatInfoCell
            title="Комнат"
            value="2"
          />
        </div>
        <div className={ToolsClassName}>{tools}</div>
      </div>
      <div className="flat-card__footer">
        <Typography
          className="flat-card__price"
          size={20}
        >
          2 800 000 ₽
        </Typography>
        <div className="flat-card__button">{actionButton}</div>
      </div>
    </div>
  )
}
