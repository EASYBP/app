import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import notifSlice from "./notifSlice";
import projectSlice from "./projectSlice";
import folderSlice from "./folderProjectSlice";
import notifLoadingSlice from "./notifLoadingSlice";
import dialogSlice from "./dialogSlice";
import configSlice from "./configSlice";

const persistConfig = {
  key: "easyBPTool",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, userReducer);
const persistedConfig = persistReducer(persistConfig, configSlice);
export const store = configureStore({
  reducer: {
    user: persistedReducer,
    notif: notifSlice,
    project: projectSlice,
    folder: folderSlice,
    loading: notifLoadingSlice,
    dialog: dialogSlice,
    config:persistedConfig
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
