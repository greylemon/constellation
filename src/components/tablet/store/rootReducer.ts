import { createSlice } from "@reduxjs/toolkit";
import * as TIMEZONE_REDUCERS from "./reducers/timezone";
import { createState } from "./tools/state";

export const constellationReducer = createSlice({
  name: 'TABLET',
  initialState: createState(),
  reducers: {
    ...TIMEZONE_REDUCERS
  }
})