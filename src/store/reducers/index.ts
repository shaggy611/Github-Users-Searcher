import { githubUser } from './githubUsers'

import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
  githubUser,
})
export type RootState = ReturnType<typeof rootReducer>
