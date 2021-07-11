import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IState } from "../@types/state";
import { constellationReducer } from "./store";

export const useTypedSelector: TypedUseSelectorHook<IState> = useSelector

export const store = configureStore({
  reducer: constellationReducer.reducer,
})