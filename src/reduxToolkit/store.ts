import { combineReducers, configureStore } from "@reduxjs/toolkit"
import menuSlice from "./slices/menu"

const reducer = combineReducers({
  menu: menuSlice || (() => null),
})

export const storeToolkit = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof reducer>
