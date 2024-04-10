import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
}

export const counterSlices = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value +=1;
        },

        decrement: (state) => {
            state.value -=1;
        },

        clearState: (state) => {
            state.value = 0;
        }
    }
})

export const { increment, decrement, clearState } = counterSlices.actions;
export default counterSlices.reducer;