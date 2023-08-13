// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';
import modalReducer from './modelSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        modal: modalReducer,
    },
});

export default store;
