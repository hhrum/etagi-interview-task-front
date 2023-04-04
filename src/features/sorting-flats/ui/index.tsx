import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Sorting } from 'shared/types'
import { SortButton, Typography } from 'shared/ui'

import { getFlatSorting, sortingChanged } from '../../../entities/flat/model'
import './style.scss'

export function SortingFlats() {
  const dispatch = useDispatch()
  const flatSorting = useSelector(getFlatSorting)

  const handleChange = (sorting: Sorting) => {
    dispatch(sortingChanged(sorting))
  }

  return (
    <div className="sorting-flats">
      <Typography className="sorting-flats__title">Сортировка:</Typography>
      <SortButton
        title="По цене"
        column="price"
        sortingVariant={flatSorting?.column === 'price' ? flatSorting?.variant : 'none'}
        onClick={handleChange}
      />
      <SortButton
        title="По площади"
        column="area"
        sortingVariant={flatSorting?.column === 'area' ? flatSorting?.variant : 'none'}
        onClick={handleChange}
      />
    </div>
  )
}
