import { createSlice } from '@reduxjs/toolkit';
import { preloadedState } from '../preloadedState';
import utils from '../utils/utils';




export const filtersSlice = createSlice({
  name: 'filters',
  initialState: preloadedState.filters,
  reducers: {
    changeSelectedOptions(state, payload){
      state.selectedOptions = payload.payload
      return state
    },
    isFiltering(state){
      state.filtering = true
      return state
    },
    stopFiltering(state){
      state.filtering = false
      return state
    },
    toggleFiltering(state, action){
      state.filtering = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(utils.filtersUtils.getFilters.pending, (state, action) => {
      state.status = 'pending';
      return state;
    });
    builder.addCase(
      utils.filtersUtils.getFilters.fulfilled,
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
          state.options = action.payload;
        }
        return state;
      }
    );
    builder.addCase(utils.filtersUtils.getFilters.rejected, (state, action) => {
      state.status = `Error: ${action.error}`;
      state.error = 'Something went wrong!';
      return state;
    });
  },
});
