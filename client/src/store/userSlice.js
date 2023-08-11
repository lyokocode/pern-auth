import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: {},
        isActive: false,
    },
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
        toggleOnlineStatus: (state) => {
            state.isActive = !state.isActive;
        },
    },
});

export const { setProfile, toggleOnlineStatus } = userSlice.actions;

export default userSlice.reducer;