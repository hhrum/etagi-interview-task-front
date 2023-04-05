import { all, call, spawn } from 'redux-saga/effects'

import { FlatWatcher } from 'entities/flat/model/saga'

export default function* RootWatcher() {
  yield call(console.log, 'hello, saga!')

  yield all([spawn(FlatWatcher)])
}
