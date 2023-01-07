import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const getAsyncUsersData = createAsyncThunk(
    "users/getAsyncTodos", async (payload, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:8000/users")
            return response.data
        } catch (error) {
            return rejectWithValue([], error.message)
        }
    }
)



const initialState = {
    users: [],
    loading: false,
    error: null
}



const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: {
        [getAsyncUsersData.pending]: (state, action) => {
            return { ...state, loading: true, error: null, users: [] }
        },
        [getAsyncUsersData.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error, users: [] }
        },
        [getAsyncUsersData.fulfilled]: (state, action) => {
            return { ...state, loading: false, error: null, users: action.payload }
        }
    }
})

export default userSlice.reducer