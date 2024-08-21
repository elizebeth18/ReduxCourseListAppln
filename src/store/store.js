import { configureStore } from "@reduxjs/toolkit";
import courseListReducer from "./courseListSlice";
import enquiryFormReducer from "./enquiryFormSlice";
import viewEnquiresReducer from "./viewEnquiresSlice";

const store = configureStore({
    reducer: {
        courseList: courseListReducer,
        enquiryForm: enquiryFormReducer,
        viewEnquires: viewEnquiresReducer
    }
});

export default store;