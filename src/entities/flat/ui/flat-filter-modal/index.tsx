import cn from 'classnames'

import { Button, FilterCell, Modal, ModalController, NumberField, Typography } from 'shared/ui'

import './style.scss'

export interface FlatFilterModalProps {
  className?: string
  controller: ModalController
}

export function FlatFilterModal({ className = '', controller }: FlatFilterModalProps) {
  const ClassName = cn('flat-filter-modal', className)

  return (
    <Modal
      wrapperClassName="flat-filter-modal-wrapper"
      className={ClassName}
      controller={controller}
    >
      <div className="flat-filter-modal__header">
        <Typography size={20}>Фильтры</Typography>
        <Button
          title="Закрыть"
          onClick={() => controller.close()}
        />
      </div>

      <div className="flat-filter-modal__filters">
        <FilterCell title="Цена">
          <Typography>От</Typography>
          <NumberField />
          <Typography>До</Typography>
          <NumberField />
        </FilterCell>
        <FilterCell title="Площадь">
          <Typography>От</Typography>
          <NumberField />
          <Typography>До</Typography>
          <NumberField />
        </FilterCell>
        <FilterCell title="Кол-во комнат">
          <Typography>От</Typography>
          <NumberField />
          <Typography>До</Typography>
          <NumberField />
        </FilterCell>
      </div>

      <div className="flat-filter-modal__footer">
        <Button
          className="flat-filter-modal__button"
          title="Сбросить"
        />
        <Button
          className="flat-filter-modal__button"
          title="Применить"
          variant="primary"
        />
      </div>
    </Modal>
  )
}
