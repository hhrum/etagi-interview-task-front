import { all, call, spawn } from 'redux-saga/effects'

import { changeCurrentFlatPageWatcher } from './change-current-flat-page-watcher'
import { changeFlatsFilterWatcher } from './change-flats-filter-watcher'
import { changeFlatsSortingWatcher } from './change-flats-sorting-watcher'
import { fetchFlatsWatcher } from './fetch-flats-watcher'

export function* FlatWatcher() {
  yield call(console.log, 'Flat Watcher')

  yield all([
    spawn(fetchFlatsWatcher),
    spawn(changeFlatsFilterWatcher),
    spawn(changeFlatsSortingWatcher),
    spawn(changeCurrentFlatPageWatcher),
  ])
}
