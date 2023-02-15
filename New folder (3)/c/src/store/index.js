import { configureStore, createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
      isLoggedIn: false,
    //   user: null,
    },
    reducers: {
      login: (state, action) => {
        state.isLoggedIn = true;
        // state.user = action.payload;
      },
      logout: (state) => {
        state.isLoggedIn = false;
        // state.user = null;
      },
    },
  });
  
  export const authActions = authSlice.actions;
  export default authSlice.reducer;

  export const store = configureStore({
    reducer: authSlice.reducer
  })