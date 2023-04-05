import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'store'

import { flatDefaultState } from './flat.slice'

export const FlatSelector = (state: RootState) => {
  if (state.flat === undefined) {
    return flatDefaultState
  }

  return state.flat
}

export const getFlats = createSelector(FlatSelector, (state) => state.items)
export const getFlatFilter = createSelector(FlatSelector, (flat) => flat.filter)
export const getFlatSorting = createSelector(FlatSelector, (flat) => flat.sorting)
export const getFlatPagination = createSelector(FlatSelector, (state) => state.pagination)
