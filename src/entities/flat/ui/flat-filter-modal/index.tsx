import cn from 'classnames'
import { useCallback } from 'react'

import { RangeFilter } from 'shared/types'
import {
  Button,
  Collapse,
  FilterCell,
  Modal,
  ModalController,
  RangeFilterFields,
  Typography,
} from 'shared/ui'

import './style.scss'

export interface FlatFilterModalProps {
  className?: string
  controller: ModalController

  price: RangeFilter | null
  area: RangeFilter | null
  rooms: RangeFilter | null
  floor: RangeFilter | null
  liveArea: RangeFilter | null
  kitchenArea: RangeFilter | null

  onChangePrice: (filter: RangeFilter | null) => void
  onChangeArea: (filter: RangeFilter | null) => void
  onChangeRooms: (filter: RangeFilter | null) => void
  onChangeFloor: (filter: RangeFilter | null) => void
  onChangeLiveArea: (filter: RangeFilter | null) => void
  onChangeKitchenArea: (filter: RangeFilter | null) => void

  onReset?: () => void
  onSubmit?: () => void
}

export function FlatFilterModal({
  className = '',
  controller,

  price,
  area,
  rooms,
  floor,
  liveArea,
  kitchenArea,

  onChangePrice,
  onChangeArea,
  onChangeRooms,
  onChangeFloor,
  onChangeLiveArea,
  onChangeKitchenArea,

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
          <RangeFilterFields
            fromValue={price?.from}
            toValue={price?.to}
            onUpdateFrom={handleChangeRange('from', onChangePrice, price)}
            onUpdateTo={handleChangeRange('to', onChangePrice, price)}
          />
        </FilterCell>
        <FilterCell title="Площадь">
          <RangeFilterFields
            fromValue={area?.from}
            toValue={area?.to}
            onUpdateFrom={handleChangeRange('from', onChangeArea, area)}
            onUpdateTo={handleChangeRange('to', onChangeArea, area)}
          />
        </FilterCell>
        <FilterCell title="Кол-во комнат">
          <RangeFilterFields
            fromValue={rooms?.from}
            toValue={rooms?.to}
            onUpdateFrom={handleChangeRange('from', onChangeRooms, rooms)}
            onUpdateTo={handleChangeRange('to', onChangeRooms, rooms)}
          />
        </FilterCell>
      </div>

      <Collapse
        contentClassName="flat-filter-modal__filters"
        title="Дополнительно"
      >
        <FilterCell title="Этаж">
          <RangeFilterFields
            fromValue={floor?.from}
            toValue={floor?.to}
            onUpdateFrom={handleChangeRange('from', onChangeFloor, floor)}
            onUpdateTo={handleChangeRange('to', onChangeFloor, floor)}
          />
        </FilterCell>
        <FilterCell title="Жилая площадь">
          <RangeFilterFields
            fromValue={liveArea?.from}
            toValue={liveArea?.to}
            onUpdateFrom={handleChangeRange('from', onChangeLiveArea, liveArea)}
            onUpdateTo={handleChangeRange('to', onChangeLiveArea, liveArea)}
          />
        </FilterCell>
        <FilterCell title="Площадь кухни">
          <RangeFilterFields
            fromValue={kitchenArea?.from}
            toValue={kitchenArea?.to}
            onUpdateFrom={handleChangeRange('from', onChangeKitchenArea, kitchenArea)}
            onUpdateTo={handleChangeRange('to', onChangeKitchenArea, kitchenArea)}
          />
        </FilterCell>
      </Collapse>

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
