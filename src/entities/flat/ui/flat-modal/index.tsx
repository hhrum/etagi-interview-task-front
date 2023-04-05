import cn from 'classnames'

import { ChildrenComponent } from 'shared/types'
import { Image, Modal, ModalController, Typography } from 'shared/ui'

import { FlatInfoCell } from '../flat-info-cell'
import './style.scss'

export interface FlatModalProps {
  className?: string
  controller: ModalController

  actionButton?: ChildrenComponent
}

const mockUrl =
  'https://cdn.esoft.digital/content/layouts//cluster/layouts/18/0c/e293cb975e87b72b' +
  '6fba22106422e03e9f8b0c18.png'

export function FlatModal({ className = '', controller, actionButton }: FlatModalProps) {
  const ClassName = cn('flat-modal', className)

  return (
    <Modal
      className={ClassName}
      controller={controller}
    >
      <Image
        src={mockUrl}
        className="flat-modal__layout-image"
      />

      <div className="flat-modal__info">
        <Typography
          className="flat-card__title"
          size={20}
        >
          Суходольская улица, 16
        </Typography>
        <FlatInfoCell
          title="Этаж"
          value="1"
        />
        <FlatInfoCell
          title="Квартира"
          value="4"
        />
        <FlatInfoCell
          title="Комнат"
          value="2"
        />
        <FlatInfoCell
          title="Площадь"
          value="100 кв.м"
        />
        <FlatInfoCell
          title="Плозадь кухни"
          value="20 кв.м"
        />
        <FlatInfoCell
          title="Жилая площадь"
          value="75 кв.м"
        />
      </div>

      <div className="flat-modal__footer">
        <Typography size={20}>2 800 000 ₽</Typography>

        {actionButton}
      </div>
    </Modal>
  )
}
