import { createSlice } from "@reduxjs/toolkit";

const FoodSlice = createSlice({
    name: "cart",   
    initialState: { count: 0 },
    reducers: {
        additems: (state) => { state.count++ },
        removeItem: (state) => { state.count-- },
    }
});

export default FoodSlice.reducer;
export const { additems, removeItem } = FoodSlice.actions;
