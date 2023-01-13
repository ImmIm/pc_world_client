import { createSlice } from '@reduxjs/toolkit';
import { preloadedState } from './preloadedState';
import utils from './utils/utils';

export const categoriesSlice = createSlice({
  name: 'category',
  initialState: preloadedState.categories,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      utils.categoryUtils.getCategories.pending,
      (state, action) => {
        state.status = 'pending';
        return state;
      }
    );
    builder.addCase(
      utils.categoryUtils.getCategories.fulfilled,
      (state, action) => {
        if (action.payload === null) {
          state.status = 'error';
          state.error = 'Something went wrong!';
        } else if (action.payload.status === 'fail') {
          state.error = action.payload.message;
          state.status = 'error';
        } else {
          state.error = '';
          state.status = 'ok';
          state.categories = action.payload;
        }
        return state;
      }
    );
    builder.addCase(
      utils.categoryUtils.getCategories.rejected,
      (state, action) => {
        state.status = `Error: ${action.error}`;
        state.error = 'Something went wrong!';
        return state;
      }
    );
  },
});
