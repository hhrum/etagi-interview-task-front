import { createAction } from '@reduxjs/toolkit'

import { Sorting } from 'shared/types'

import { FlatFilter } from './flat.slice'

const REDUCER_PREFIX = 'flat'

export const fetchFlatsAction = createAction(`${REDUCER_PREFIX}/fetchFlatsList`)

export const changeFlatsFilterAction = createAction<FlatFilter>(
  `${REDUCER_PREFIX}/changeFlatsFilter`,
)

export const changeFlatsSortingAction = createAction<Sorting>(
  `${REDUCER_PREFIX}/changeFlatsSorting`,
)

export const changeCurrentFlatPageAction = createAction<number>(
  `${REDUCER_PREFIX}/changeCurrentFlatPage`,
)
