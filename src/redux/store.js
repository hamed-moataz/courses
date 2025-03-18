import { configureStore } from "@reduxjs/toolkit";
import { add } from "./Courses/add";
import  coursesSlice  from "./Courses/fetchData";


export const store = configureStore({
  reducer: {
    add,
    courses: coursesSlice,
  },
});
