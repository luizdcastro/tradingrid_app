import { combineReducers } from 'redux'

import auth from './authReducer'
import user from './userReducer'

const rootReducer = combineReducers({
    auth,
    user 
});

export default rootReducer