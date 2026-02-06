import persistReducer from "redux-persist/es/persistReducer";
import { authReduser } from "./slices/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReduser);

export const store = configureStore({
    reducer:{
        auth:persistedReducer,
    },
    devTools:true
})

export const persistor = persistStore(store);