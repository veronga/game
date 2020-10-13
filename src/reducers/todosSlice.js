import {createSlice} from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(...action.payload);
    },
  },
});

export const {addUser} = todosSlice.actions;

export default todosSlice.reducer;
