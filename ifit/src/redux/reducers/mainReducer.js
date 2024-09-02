import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedItem: 'home',
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    selectItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { selectItem } = mainSlice.actions;
export default mainSlice.reducer;
