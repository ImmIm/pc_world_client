import { createSlice } from '@reduxjs/toolkit';
import { preloadedState } from '../preloadedState';
import utils from '../utils/utils';

export const dataSlice = createSlice({
    name: 'data',
    initialState: preloadedState.data,
    reducers: {
      loadCategories(state) {},
    },
  });