import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from 'redux/filter/filterSlice';
import { contactReducer } from 'redux/slice/contactSlice';
import { persistStore, persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const persistSavedReducer = persistReducer(persistConfig, contactReducer);
export const store = configureStore({
  reducer: {
    contacts: persistSavedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
