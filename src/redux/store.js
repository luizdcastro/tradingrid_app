import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ApiMiddleware } from '../services/ApiMiddleware'

import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    compose(applyMiddleware(ApiMiddleware))
);

const persistor = persistStore(store)

export { persistor, store }