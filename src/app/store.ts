import { preloadedState } from './preloadedState';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { categoriesSlice } from './slices/categoriesSlice';
import { uiSlice } from './slices/uiSlice';
import { authSlice } from './slices/authSlice';
import { dataSlice } from './slices/dataSlice';
import { filtersSlice } from './slices/filtersSlice';


export const store = configureStore({
  preloadedState,
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    data: dataSlice.reducer,
    categories: categoriesSlice.reducer,
    filters: filtersSlice.reducer
  },
});
export const authActions = authSlice.actions;
export const uiActions = uiSlice.actions;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
