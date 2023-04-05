import { combineReducers } from '@reduxjs/toolkit'

import { FlatReducer } from 'entities/flat'

const RootReducer = combineReducers({
  flat: FlatReducer,
})

export default RootReducer
