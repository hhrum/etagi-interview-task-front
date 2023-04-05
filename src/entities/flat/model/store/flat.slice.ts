import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IPagination, RangeFilter, Sorting } from 'shared/types'

import { Flat } from '../flat'

export interface FlatFilter {
  price: RangeFilter | null
  area: RangeFilter | null
  rooms: RangeFilter | null

  floor: RangeFilter | null
  liveArea: RangeFilter | null
  kitchenArea: RangeFilter | null
}

export interface FlatState {
  items: Flat[]

  filter: FlatFilter

  sorting: Sorting | null

  pagination: IPagination
}

export const flatDefaultState: FlatState = {
  items: [],

  filter: {
    price: null,
    area: null,
    rooms: null,
    floor: null,
    liveArea: null,
    kitchenArea: null,
  },

  sorting: null,

  pagination: {
    current: 1,
    total: null,
    prev: null,
    next: null,
  },
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

    flatsPaginationLoaded(state, action: PayloadAction<IPagination>) {
      state.pagination = action.payload
    },

    currentFlatsPageChanged(state, action: PayloadAction<number>) {
      state.pagination.current = action.payload
    },

    resetPagination(state) {
      state.pagination.current = 1
    },
  },
})

export const {
  flatsLoaded,
  sortingChanged,
  filterChanged,

  flatsPaginationLoaded,
  currentFlatsPageChanged,
  resetPagination,
} = flatSlice.actions

export const FlatReducer = flatSlice.reducer
