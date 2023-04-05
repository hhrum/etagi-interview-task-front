import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FlatFilterModal, changeFlatsFilterAction, getFlatFilter } from 'entities/flat'

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
  const [floorFilter, setFloorFilter] = useState<RangeFilter | null>(null)
  const [liveAreaFilter, setLiveAreaFilter] = useState<RangeFilter | null>(null)
  const [kitchenAreaFilter, setKitchenAreaFilter] = useState<RangeFilter | null>(null)

  useEffect(() => {
    setPriceFilter(flatFilter.price)
    setAreaFilter(flatFilter.area)
    setRoomsFilter(flatFilter.rooms)
    setFloorFilter(flatFilter.floor)
    setLiveAreaFilter(flatFilter.liveArea)
    setKitchenAreaFilter(flatFilter.kitchenArea)
  }, [controller.isOpen, flatFilter])

  const handleReset = useCallback(() => {
    dispatch(
      changeFlatsFilterAction({
        price: null,
        area: null,
        rooms: null,
        floor: null,
        liveArea: null,
        kitchenArea: null,
      }),
    )
  }, [dispatch])

  const handleSubmit = useCallback(() => {
    dispatch(
      changeFlatsFilterAction({
        price: priceFilter,
        area: areaFilter,
        rooms: roomsFilter,
        floor: floorFilter,
        liveArea: liveAreaFilter,
        kitchenArea: kitchenAreaFilter,
      }),
    )
  }, [
    areaFilter,
    dispatch,
    floorFilter,
    kitchenAreaFilter,
    liveAreaFilter,
    priceFilter,
    roomsFilter,
  ])

  return (
    <div className="filter-flats">
      <FilterButton
        className="filter-flats__button"
        onClick={() => controller.open()}
      />
      <FlatFilterModal
        controller={controller}
        price={priceFilter}
        area={areaFilter}
        rooms={roomsFilter}
        floor={floorFilter}
        liveArea={liveAreaFilter}
        kitchenArea={kitchenAreaFilter}
        onChangePrice={setPriceFilter}
        onChangeArea={setAreaFilter}
        onChangeRooms={setRoomsFilter}
        onChangeFloor={setFloorFilter}
        onChangeLiveArea={setLiveAreaFilter}
        onChangeKitchenArea={setKitchenAreaFilter}
        onReset={handleReset}
        onSubmit={handleSubmit}
      />
    </div>
  )
}
