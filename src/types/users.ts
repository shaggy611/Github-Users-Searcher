/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UsersState {
  user: object
  loading: boolean
  error: null | string
}

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS
  payload: any[]
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR
  payload: string
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction

export type githubUserReceivedData = {
  login?: string
  avatar_url?: string
  bio?: string
  html_url?: string | any
  public_repos?: string
}
