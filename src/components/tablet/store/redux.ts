import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { constellationReducer } from "./rootReducer";

/**
 * Tablet mainly consists of user settings or systems data
 * - timezone
 * - brightness
 * - ...etc
 */

export type TTabletState = {
  timezone: string
}

export const useTypedSelector: TypedUseSelectorHook<TTabletState> = useSelector

export const store = configureStore({
  reducer: constellationReducer.reducer,
})