import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    listOfCourses: [],
    isLoading : false,
    error: null
}

export const fetchCourseList = createAsyncThunk('courseList/fetch', async() => {
    const response = await axios.get('http://localhost:9112/learn-c.org')
    return response.data
});

const courseListSlice = createSlice({
    name: 'courseList',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCourseList.pending, state => {
            state.isLoading = true;
        })
        builder.addCase(fetchCourseList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.listOfCourses = action.payload;
        })
        builder.addCase(fetchCourseList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});

export default courseListSlice.reducer;

