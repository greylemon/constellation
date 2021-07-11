import { createSlice } from "@reduxjs/toolkit";
import { createState } from "./tools/state";


export const constellationReducer = createSlice({
  name: 'CONSTELLATION',
  initialState: createState(),
  reducers: {}
})