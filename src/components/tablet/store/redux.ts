import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TState } from "../@types/state";
import { constellationReducer } from "./store";

export const useTypedSelector: TypedUseSelectorHook<TState> = useSelector

export const store = configureStore({
  reducer: constellationReducer.reducer,
})