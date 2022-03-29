import { configureStore } from "@reduxjs/toolkit";
import appModal from "features/rootapp/appModal";
import appSlice from "features/rootapp/appSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["modal"],
};
const persistedReducerApp = persistReducer(persistConfig, appSlice);
const persistedReducerModal = persistReducer(persistConfig, appModal);

export const store = configureStore({
  reducer: {
    app: persistedReducerApp,
    modal: persistedReducerModal,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
