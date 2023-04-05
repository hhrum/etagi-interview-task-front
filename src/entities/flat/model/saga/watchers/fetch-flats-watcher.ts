import { takeEvery } from 'redux-saga/effects'

import { fetchFlatsAction } from '../../store'
import { fetchFlatsWorker } from '../workers'

export function* fetchFlatsWatcher() {
  yield takeEvery(fetchFlatsAction, fetchFlatsWorker)
}
