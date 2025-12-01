import { createSlice } from "@reduxjs/toolkit";

const reactSlice = createSlice({
  name: "slice1",
  initialState: { count: 0 },
  reducers: {
    Increment: (state) => { state.count += 1 },
    Decrement: (state) => { state.count -= 1 },
    Reset: (state) => { state.count = 0 },
    customIncreaser: (state, action) => { state.count += action.payload }
  }
});

export const { Increment, Decrement, Reset, customIncreaser } = reactSlice.actions;
export default reactSlice.reducer;
        