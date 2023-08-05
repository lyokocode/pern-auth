// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
    error: null, // Hata mesajı için yeni bir alan ekledik
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.error = null; // Giriş işlemi başladığında hata mesajını temizliyoruz
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.error = null; // Başarılı giriş durumunda hata mesajını temizliyoruz
            // Kullanıcı durumunu localStorage'e kaydet
            localStorage.setItem('user', JSON.stringify(action.payload));
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
        },
        loginFailure: (state, action) => {
            state.user = null;
            state.isLoggedIn = false;
            state.error = action.payload; // Backend'den dönen hata mesajını depoluyoruz
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            state.error = null;
            // Kullanıcı durumunu localStorage'den temizle
            localStorage.removeItem('user');
            localStorage.removeItem('isLoggedIn');
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
