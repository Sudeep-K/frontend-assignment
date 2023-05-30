'use client'

import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './Features/query/querySlice';
import queryResultReducer from './Features/queryResult/queryResultSlice'

export const store = configureStore({
    reducer: {
        query: queryReducer,
        queryResult: queryResultReducer
    }
});

