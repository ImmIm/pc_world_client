import { createSlice } from '@reduxjs/toolkit';
import { preloadedState } from '../preloadedState';
import utils from '../utils/utils';

export const dataSlice = createSlice({
  name: 'data',
  initialState: preloadedState.data,
  reducers: {
    clearProducts(state){
      state.products = []
      state.productCount = 0;
      state.maxProducts = 0;
    }

  },
  extraReducers: (builder) => {
    builder.addCase(utils.dataUtils.getProductsByFilters.pending, (state, action) => {
      state.status = 'pending';
      return state;
    });
    builder.addCase(
      utils.dataUtils.getProductsByFilters.fulfilled,
      (state, action) => {
        if (action.payload === null) {
          state.status = 'error';
          state.error = 'Something went wrong!';
        } else if (action.payload.status === 'fail') {
          state.error = action.payload.message;
          state.status = 'error';
        } else {
          if (action.payload.category === state.category) {
            state.maxProducts = action.payload.data.count
            state.category = action.payload.category
            state.productCount = state.productCount + action.payload.data.data.length;
            state.error = '';
            state.status = 'ok';
            // @ts-ignore
            state.products = state.products.concat(action.payload.data.data);
          } else {
            state.maxProducts = action.payload.data.count
            state.category = action.payload.category
            state.productCount = action.payload.data.data.length;
            state.error = '';
            state.status = 'ok';
            state.products = action.payload.data.data;
          }
        }
        return state;
      }
    );
    builder.addCase(
      utils.dataUtils.getProductsByFilters.rejected,
      (state, action) => {
        state.status = `Error: ${action.error}`;
        state.error = 'Something went wrong!';
        return state;
      }
    );
    builder.addCase(utils.dataUtils.getFullProduct.fulfilled, (state, action) => {
      state.currentProduct = action.payload
    }
      
    )
  },
});
