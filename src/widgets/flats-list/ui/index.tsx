import { FilterFlats } from 'features/filter-flats'
import { OpenFlatCard } from 'features/open-flat-card'
import { SortingFlats } from 'features/sorting-flats'

import './style.scss'

export function FlatsList() {
  return (
    <div className="flats-list">
      <div className="flats-list__tools">
        <SortingFlats />

        <FilterFlats />
      </div>
      <div className="flats-list__items">
        <OpenFlatCard className="flats-list__item" />
        <OpenFlatCard className="flats-list__item" />
        <OpenFlatCard className="flats-list__item" />
        <OpenFlatCard className="flats-list__item" />
        <OpenFlatCard className="flats-list__item" />
        <OpenFlatCard className="flats-list__item" />
      </div>
    </div>
  )
}
