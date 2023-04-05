import { combineReducers } from '@reduxjs/toolkit'

import { FlatReducer } from '../entities/flat/model/store'

const RootReducer = combineReducers({
  flat: FlatReducer,
})

export default RootReducer
