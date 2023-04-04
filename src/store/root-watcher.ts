import { all, call, spawn } from 'redux-saga/effects'

export default function* RootWatcher() {
  yield call(console.log, 'hello, saga!')
}
