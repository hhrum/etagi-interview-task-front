import { PayloadAction } from '@reduxjs/toolkit'
import { put, takeEvery } from 'redux-saga/effects'

import { changeCurrentFlatPageAction, currentFlatsPageChanged } from '../../store'
import { fetchFlatsWorker } from '../workers'

function* changeCurrentFlatPageWorker(action: PayloadAction<number>) {
  yield put(currentFlatsPageChanged(action.payload))

  yield fetchFlatsWorker()
}

export function* changeCurrentFlatPageWatcher() {
  yield takeEvery(changeCurrentFlatPageAction, changeCurrentFlatPageWorker)
}
