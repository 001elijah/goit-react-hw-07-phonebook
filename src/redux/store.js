import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import contactsReducer from './contactsSlice';

const persistContactsConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts']
};

const persistedContactsReducer = persistReducer(persistContactsConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // preloadedState,
    // devTools: process.env.NODE_ENV === "production"// true/false - show/hide redux devtools state
});

export const persistor = persistStore(store);