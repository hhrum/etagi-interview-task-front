import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import RootReducer from './root-reducer'
import RootWatcher from './root-watcher'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(RootWatcher)

export { store }

export type RootState = ReturnType<typeof store.getState>
