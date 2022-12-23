import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const preloadedState = {
  auth: {
    currentUser: 'John',
    userPicture: 'img1.jpg',
    isLogined: false,
  },
  ui: {
    theme: 'bright',
    loginBackdrop: false,
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: preloadedState.auth,
  reducers: {
    login(state) {
      state.isLogined = true;
      return state;
    },
    signUp() {},
    logout(state) {
      state.isLogined = false;
      return state;
    },
  },
});

export const uiSlice = createSlice({
  name: 'ui',
  initialState: preloadedState.ui,
  reducers: {
    toggleTheme(state) {
      if (state.theme === 'dark') {
        state.theme = 'bright';
        document.body.style.backgroundColor = '#E7DBC6';
        return state;
      }
      document.body.style.backgroundColor = '#31708E';
      state.theme = 'dark';
      return state;
    },
    toggleLoginBackdrop(state) {
      state.loginBackdrop
        ? state.loginBackdrop = false
        : state.loginBackdrop = true; 
      return state;
    },
  },
});

export const store = configureStore({
  preloadedState,
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer
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
