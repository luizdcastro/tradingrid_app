import * as constants from '../constants'

const defaultState = {}

export default function getmeReducer(state = [], action) {
    switch (action.type) {
        case constants.GET_USER:
            return { ...action.payload }
        case constants.RESET_AUTH_DATA:
            return { ...defaultState }
        default:
            return state
    }
}