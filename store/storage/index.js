import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: "redux",
    storage: AsyncStorage,
    whitelist: ["todoData"],
    blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});
export const persistor = persistStore(store);


