import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  amountState: 23,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    incrementCount: (state) => {
      if (state.counter !== 10) {
        state.counter += 1;
      }
    },

    decrementCount: (state) => {
      if (state.counter >= 1) {
        state.counter -= 1;
      }
    },

    resetCounter: (state) => {
      state.counter = 0;
    },

    addAmount: (state, action) => {
      state.counter += action.payload;
      state.amountState = action.payload;
    },
  },
});

export const { incrementCount, decrementCount, resetCounter, addAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
