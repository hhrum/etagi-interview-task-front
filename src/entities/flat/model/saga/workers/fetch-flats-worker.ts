import { call, put, select } from 'redux-saga/effects'

import { IPagination, Sorting } from 'shared/types'

import { FetchFlatsResult, fetchFlats } from '../../../api'
import {
  FlatFilter,
  flatsLoaded,
  flatsPaginationLoaded,
  getFlatFilter,
  getFlatPagination,
  getFlatSorting,
} from '../../store'

export function* fetchFlatsWorker() {
  const filter = (yield select(getFlatFilter)) as FlatFilter
  const sorting = (yield select(getFlatSorting)) as Sorting
  const pagination = (yield select(getFlatPagination)) as IPagination

  try {
    const result = (yield call(fetchFlats, filter, sorting, pagination.current)) as FetchFlatsResult

    yield put(flatsLoaded(result.items))
    yield put(flatsPaginationLoaded(result.pagination))

    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (e) {
    alert('Произошла ошибка на сервер')
  }
}
