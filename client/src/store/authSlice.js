import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    auth: false,
}
export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: state => {
            state.auth = !state.auth
        }
    }
})
export const { setAuth } = auth.actions
export default auth.reducer