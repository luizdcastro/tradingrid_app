import * as constants from '../constants'

const defaultState = {
  id: null,
  connected: false,
}

const authData = localStorage.getItem('user')
const INITIAL_STATE = authData ? JSON.parse(authData) : defaultState

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constants.SET_AUTH_DATA:
      return { ...action.payload }
    case constants.RESET_AUTH_DATA:
      return { ...defaultState }
    default:
      return state;
  }
}