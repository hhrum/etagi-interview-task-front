import { FlatFilterModal } from 'entities/flat/ui/flat-filter-modal'

import { useModal } from 'shared/lib'
import { FilterButton } from 'shared/ui'

import './style.scss'

export function FilterFlats() {
  const controller = useModal()

  return (
    <div className="filter-flats">
      <FilterButton
        className="filter-flats__button"
        onClick={() => controller.open()}
      />
      <FlatFilterModal controller={controller} />
    </div>
  )
}
