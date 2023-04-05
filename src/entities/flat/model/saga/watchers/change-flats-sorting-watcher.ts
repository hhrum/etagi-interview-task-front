import { PayloadAction } from '@reduxjs/toolkit'
import { put, takeEvery } from 'redux-saga/effects'

import { Sorting } from 'shared/types'

import { changeFlatsSortingAction, resetPagination, sortingChanged } from '../../store'
import { fetchFlatsWorker } from '../workers'

function* changeFlatsSortingWorker(action: PayloadAction<Sorting>) {
  yield put(sortingChanged(action.payload))
  yield put(resetPagination())

  yield fetchFlatsWorker()
}

export function* changeFlatsSortingWatcher() {
  yield takeEvery(changeFlatsSortingAction, changeFlatsSortingWorker)
}
