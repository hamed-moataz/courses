import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    loading:false,
    courses: [],
    error:null
}
export const addCourse = createAsyncThunk("add", async(courseData)=>{
    try {
        const {data} = await axios.post("http://localhost:3004/courses" , courseData)
        return data
    } catch (error) {
        console.log(error)
    }
});
export const courseSlice = createSlice({
    name:"course-slice",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
       builder.addCase(addCourse.pending, (state )=>{
           state.loading = true;
       });
       builder.addCase(addCourse.fulfilled , (state , action)=>{
           state.loading = false;
           state.courses = [...state.courses , action.payload]
       })
       builder.addCase(addCourse.rejected , (state , action)=>{
           state.loading = false;
           state.error = action.error.message
       })
    }
})
export const add = courseSlice.reducer
