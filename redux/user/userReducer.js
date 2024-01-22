import { createReducer } from "@reduxjs/toolkit";

export const userMessageReducer = createReducer({}, (builder) => {
    builder.addCase('updateProfileRequest', (state) => {
        state.loading = true;
    }),
    builder.addCase('updateProfileSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload
    }),
    builder.addCase('updateProfileFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }),
    
    builder.addCase('clearError', (state) => {
        state.error = null;
    }),
    builder.addCase('clearMessage', (state) => {
        state.message = null;
    })
})