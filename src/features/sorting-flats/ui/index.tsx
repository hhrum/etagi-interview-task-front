import { useDispatch, useSelector } from 'react-redux'

import { changeFlatsSortingAction, getFlatSorting, sortingBy } from 'entities/flat'

import { Sorting } from 'shared/types'
import { SortButton, Typography } from 'shared/ui'

import './style.scss'

export function SortingFlats() {
  const dispatch = useDispatch()
  const flatSorting = useSelector(getFlatSorting)

  const handleChange = (sorting: Sorting) => {
    dispatch(changeFlatsSortingAction(sorting))
  }

  return (
    <div className="sorting-flats">
      <Typography className="sorting-flats__title">Сортировка:</Typography>
      {sortingBy.map((sorting) => (
        <SortButton
          key={sorting.column}
          title={sorting.title}
          column={sorting.column}
          sortingVariant={flatSorting?.column === sorting.column ? flatSorting?.variant : 'none'}
          onClick={handleChange}
        />
      ))}
    </div>
  )
}
