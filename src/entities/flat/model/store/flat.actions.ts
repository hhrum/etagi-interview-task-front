import { createAction } from '@reduxjs/toolkit'

const REDUCER_PREFIX = 'flat'

export const fetchFlatsList = createAction(`${REDUCER_PREFIX}/fetchFlatsList`)
