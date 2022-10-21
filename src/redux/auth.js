import {createSlice} from '@reduxjs/toolkit';

const initialValue = [];

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: initialValue,
    isLoggedIn: false,
  },
  reducers: {
    signUp: (state, action) => {
      state.user.push(action.payload);
      state.isLoggedIn = true;
    },
    login: (state, action) => {
      state.user.forEach(user => {
        if (user.mobileNumber === action.payload.mobileNumber) {
          state.isLoggedIn = user.mPin === action.payload.mPin ? true : null;
        }
      });
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const {signUp, login, logout} = authSlice.actions;
export default authSlice.reducer;
