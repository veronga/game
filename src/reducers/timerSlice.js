import {createSlice} from '@reduxjs/toolkit';

const timerSlice = createSlice({
  name: 'timer',
  initialState: 5,
  reducers: {
    increment: (state) => state + 3,
    decrement: (state) => state - 3,
  },
});

export const {increment, decrement} = timerSlice.actions;

export default timerSlice.reducer;
