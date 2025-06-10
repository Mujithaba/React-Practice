import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 0,
};

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  
  reducers: {
    handleIncreaseCounterAction: (state, action) => {
      state.counterValue = state.counterValue + 1;
    },
  },
});

export const { handleIncreaseCounterAction } = counterSlice.actions;
export default counterSlice.reducer;
