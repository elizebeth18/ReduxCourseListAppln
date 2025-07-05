import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import courseListReducer,{fetchCourseList} from '../store/courseListSlice'

jest.mock('axios'); // Mock the entire axios module

describe("Course List Reducer",() => {
    
    const initialState = {
        listOfCourses: [],
        isLoading : false,
        error: null
    };

    test("should handle fetchCourseList.pending",() =>{
        const action = {type: fetchCourseList.pending.type};
        const state = courseListReducer(initialState, action);
        expect(state.isLoading).toBe(false)
    })
})