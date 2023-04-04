import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'store'

export const FlatSelector = (state: RootState) => state.flat

export const getFlatFilter = createSelector(FlatSelector, (flat) => flat.filter)
export const getFlatSorting = createSelector(FlatSelector, (flat) => flat.sorting)
