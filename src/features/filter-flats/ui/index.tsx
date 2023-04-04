import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filterChanged, getFlatFilter } from 'entities/flat/model'
import { FlatFilterModal } from 'entities/flat/ui/flat-filter-modal'

import { useModal } from 'shared/lib'
import { RangeFilter } from 'shared/types'
import { FilterButton } from 'shared/ui'

import './style.scss'

export function FilterFlats() {
  const dispatch = useDispatch()
  const flatFilter = useSelector(getFlatFilter)
  const controller = useModal()

  const [priceFilter, setPriceFilter] = useState<RangeFilter | null>(null)
  const [areaFilter, setAreaFilter] = useState<RangeFilter | null>(null)
  const [roomsFilter, setRoomsFilter] = useState<RangeFilter | null>(null)

  useEffect(() => {
    setPriceFilter(flatFilter.price)
    setAreaFilter(flatFilter.area)
    setRoomsFilter(flatFilter.rooms)
  }, [controller.isOpen, flatFilter.area, flatFilter.price, flatFilter.rooms])

  const handleReset = useCallback(() => {
    dispatch(
      filterChanged({
        price: null,
        area: null,
        rooms: null,
      }),
    )
  }, [dispatch])

  const handleSubmit = useCallback(() => {
    dispatch(
      filterChanged({
        price: priceFilter,
        area: areaFilter,
        rooms: roomsFilter,
      }),
    )
  }, [areaFilter, dispatch, priceFilter, roomsFilter])

  return (
    <div className="filter-flats">
      <FilterButton
        className="filter-flats__button"
        onClick={() => controller.open()}
      />
      <FlatFilterModal
        controller={controller}
        price={priceFilter}
        onChangePrice={setPriceFilter}
        area={areaFilter}
        onChangeArea={setAreaFilter}
        rooms={roomsFilter}
        onChangeRooms={setRoomsFilter}
        onReset={handleReset}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
