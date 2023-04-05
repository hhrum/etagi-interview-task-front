import { PayloadAction } from '@reduxjs/toolkit'
import { put, takeEvery } from 'redux-saga/effects'

import { FlatFilter, changeFlatsFilterAction, filterChanged, resetPagination } from '../../store'
import { fetchFlatsWorker } from '../workers'

function* changeFlatsFilterWorker(action: PayloadAction<FlatFilter>) {
  yield put(filterChanged(action.payload))
  yield put(resetPagination())

  yield fetchFlatsWorker()
}

export function* changeFlatsFilterWatcher() {
  yield takeEvery(changeFlatsFilterAction, changeFlatsFilterWorker)
}
