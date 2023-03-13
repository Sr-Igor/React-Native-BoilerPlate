import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducers from './reducers';

//Persistor
import { persistStore, persistReducer } from 'redux-persist';

//Perisistor Module
const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['profile']
    // blacklist: ['auth']
  },
  rootReducers
);

const store = configureStore({
  reducer: persistedReducer
});

const persistor = persistStore(store);
export { store, persistor };
