import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RangeFilter, Sorting } from 'shared/types'

import { Flat } from '../flat'

export interface FlatFilter {
  price: RangeFilter | null
  area: RangeFilter | null
  rooms: RangeFilter | null
}

export interface FlatState {
  items: Flat[]

  filter: FlatFilter

  sorting: Sorting | null

  page: number
}

export const flatDefaultState: FlatState = {
  items: [],

  filter: {
    price: null,
    area: null,
    rooms: null,
  },

  sorting: null,

  page: 1,
}

const flatSlice = createSlice({
  name: 'flat',
  initialState: flatDefaultState,
  reducers: {
    flatsLoaded(state, action: PayloadAction<Flat[]>) {
      state.items = action.payload
    },

    sortingChanged(state, action: PayloadAction<Sorting>) {
      state.sorting = action.payload
    },

    filterChanged(state, action: PayloadAction<FlatFilter>) {
      state.filter = action.payload
    },
  },
})

export const { flatsLoaded, sortingChanged, filterChanged } = flatSlice.actions

export const FlatReducer = flatSlice.reducer
