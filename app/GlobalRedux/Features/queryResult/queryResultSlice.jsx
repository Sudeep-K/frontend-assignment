'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    queryResult: []
}

export const queryResultSlice = createSlice({
    name: 'queryResult',
    initialState,
    reducers: {
        setQueryResult: (state, action) => {
            state.queryResult = action.payload
        }
    }
})

export const { setQueryResult } = queryResultSlice.actions

export default queryResultSlice.reducer