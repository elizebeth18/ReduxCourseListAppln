import { configureStore } from "@reduxjs/toolkit";
import courseListReducer from "./courseListSlice";

const store = configureStore({
    reducer: {
        courseList: courseListReducer
    }
});

export default store;