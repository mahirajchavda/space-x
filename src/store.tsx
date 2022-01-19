import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { favoriteReducer } from "./redux/favoriteSlice"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { RootStateOrAny } from "react-redux"

// ...
const rootReducer = combineReducers({
  favorite: favoriteReducer
})

const persistConfig = {
  key: "SPACE-X",
  storage
}
// export type RootState = ReturnType<typeof store.getState>
const persistedReducer = persistReducer<RootStateOrAny>(
  persistConfig,
  rootReducer
)

const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)
export default store
// const store = configureStore({
//   reducer: {
//     favorite: favoriteReducer
//   }
// })

// export default store
