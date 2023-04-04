import cn from 'classnames'
import { ChangeEvent, useCallback } from 'react'

import { RangeFilter } from 'shared/types'
import { Button, FilterCell, Modal, ModalController, NumberField, Typography } from 'shared/ui'

import './style.scss'

export interface FlatFilterModalProps {
  className?: string
  controller: ModalController

  price: RangeFilter | null
  onChangePrice: (filter: RangeFilter | null) => void
  area: RangeFilter | null
  onChangeArea: (filter: RangeFilter | null) => void
  rooms: RangeFilter | null
  onChangeRooms: (filter: RangeFilter | null) => void

  onReset?: () => void
  onSubmit?: () => void
}

export function FlatFilterModal({
  className = '',
  controller,

  price,
  onChangePrice,
  area,
  onChangeArea,
  rooms,
  onChangeRooms,

  onReset = () => null,
  onSubmit = () => null,
}: FlatFilterModalProps) {
  const ClassName = cn('flat-filter-modal', className)

  const handleChangeRange = useCallback(
    (
        type: 'from' | 'to',
        onChange: (filter: RangeFilter | null) => void,
        current: RangeFilter | null,
      ) =>
      (value: number) => {
        if (current) {
          onChange({
            ...current,
            [type]: value,
          })
          return
        }

        if (type === 'from') {
          onChange({ from: value, to: null })
          return
        }

        onChange({ from: null, to: value })
      },
    [],
  )

  const handleReset = useCallback(() => {
    onReset()
  }, [onReset])

  const handleSubmit = useCallback(() => {
    controller.close()
    onSubmit()
  }, [controller, onSubmit])

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
          <NumberField
            min={0}
            max={price?.to !== null ? price?.to : undefined}
            onUpdate={handleChangeRange('from', onChangePrice, price)}
            value={price?.from !== null && price?.from !== undefined ? price?.from : 0}
          />
          <Typography>До</Typography>
          <NumberField
            min={price?.from !== null ? price?.from : undefined}
            onUpdate={handleChangeRange('to', onChangePrice, price)}
            value={price?.to !== null && price?.to !== undefined ? price?.to : 0}
          />
        </FilterCell>
        <FilterCell title="Площадь">
          <Typography>От</Typography>
          <NumberField
            min={0}
            max={area?.to !== null ? area?.to : undefined}
            onUpdate={handleChangeRange('from', onChangeArea, area)}
            value={area?.from !== null && area?.from !== undefined ? area?.from : 0}
          />
          <Typography>До</Typography>
          <NumberField
            min={area?.from !== null ? area?.from : undefined}
            onUpdate={handleChangeRange('to', onChangeArea, area)}
            value={area?.to !== null && area?.to !== undefined ? area?.to : 0}
          />
        </FilterCell>
        <FilterCell title="Кол-во комнат">
          <Typography>От</Typography>
          <NumberField
            min={0}
            max={rooms?.to !== null ? rooms?.to : undefined}
            onUpdate={handleChangeRange('from', onChangeRooms, rooms)}
            value={rooms?.from !== null && rooms?.from !== undefined ? rooms?.from : 0}
          />
          <Typography>До</Typography>
          <NumberField
            min={rooms?.from !== null ? rooms?.from : undefined}
            onUpdate={handleChangeRange('to', onChangeRooms, rooms)}
            value={rooms?.to !== null && rooms?.to !== undefined ? rooms?.to : 0}
          />
        </FilterCell>
      </div>

      <div className="flat-filter-modal__footer">
        <Button
          className="flat-filter-modal__button"
          title="Сбросить"
          onClick={handleReset}
        />
        <Button
          className="flat-filter-modal__button"
          title="Применить"
          variant="primary"
          onClick={handleSubmit}
        />
      </div>
    </Modal>
  )
}
