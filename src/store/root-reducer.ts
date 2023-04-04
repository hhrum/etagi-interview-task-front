import { combineReducers } from '@reduxjs/toolkit'

import { FlatReducer } from '../entities/flat/model/store'

const rootReducer = combineReducers({
  flat: FlatReducer,
})

export default rootReducer
