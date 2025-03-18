import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../../createCliente";

const initialState = {
  loading: false,
  courses: [],
  error: null,
};

// fetch slices
export const fetchCourses = createAsyncThunk("courses/fetch", async () => {
  try {
    const data = await supabase.from('forms').select();
    return data.data;
  } catch (error) {
    return error.message;
  }
});

// delete slices
export const deleteCourse = createAsyncThunk("courses/delete", async (id) => {
  try {
    await supabase.from('forms').delete().eq('id', id);
    return id;
  } catch (error) {
    throw error.message;
  }
});

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    });
    builder.addCase(fetchCourses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // deleted 
    builder.addCase(deleteCourse.fulfilled, (state, action) => {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload
      );
    });
  },
});

export default coursesSlice.reducer;
