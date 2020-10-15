import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {players: [], currentPlayersIndex: 0},
  reducers: {
    addUsers(state, action) {
      state.players.push(...action.payload);
    },
    changeIndex(state) {
      if (state.players.length === state.currentPlayersIndex + 1) {
        state.currentPlayersIndex = 0;
      } else {
        state.currentPlayersIndex = state.currentPlayersIndex + 1;
      }
    },
  },
});

export const {addUsers, changeIndex} = userSlice.actions;

export default userSlice.reducer;
