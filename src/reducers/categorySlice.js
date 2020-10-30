import {createSlice} from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: 'Классический',
  reducers: {
    changeCategory(state, action) {
     return state = action.payload
    },
  },
});

export const {changeCategory} = categorySlice.actions;

export default categorySlice.reducer;
