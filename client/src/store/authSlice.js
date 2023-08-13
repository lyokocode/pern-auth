import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.error = null;
            localStorage.setItem('user', JSON.stringify(action.payload));
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
        },
        loginFailure: (state, action) => {
            state.user = null;
            state.isLoggedIn = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            state.error = null;
            localStorage.removeItem('user');
            localStorage.removeItem('isLoggedIn');
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
