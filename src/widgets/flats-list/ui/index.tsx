import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FilterFlats } from 'features/filter-flats'
import { FlatsPagination } from 'features/flats-pagination'
import { OpenFlatCard } from 'features/open-flat-card'
import { SortingFlats } from 'features/sorting-flats'

import { fetchFlatsAction, getFlats } from 'entities/flat'

import './style.scss'

export function FlatsList() {
  const dispatch = useDispatch()

  const flats = useSelector(getFlats)

  useEffect(() => {
    dispatch(fetchFlatsAction())
  }, [dispatch])

  return (
    <div className="flats-list">
      <div className="flats-list__tools">
        <SortingFlats />

        <FilterFlats />
      </div>
      <div className="flats-list__items">
        {flats.map((flat) => (
          <OpenFlatCard
            key={flat.id}
            className="flats-list__item"
            flat={flat}
          />
        ))}
      </div>
      <FlatsPagination />
    </div>
  )
}
