import { SortButton, Typography } from 'shared/ui'

import './style.scss'

export function SortingFlats() {
  return (
    <div className="sorting-flats">
      <Typography className="sorting-flats__title">Сортировка:</Typography>
      <SortButton title="По цене" />
      <SortButton title="По площади" />
    </div>
  )
}
