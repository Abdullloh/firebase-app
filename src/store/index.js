import { createStore, combineReducers,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './Reducers/userReducer';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
  }
  const rootReducer = combineReducers({
    user: userReducer,
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware()));
  const persistor = persistStore(store);
  export { store as default, persistor }