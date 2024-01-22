import { createReducer } from "@reduxjs/toolkit";

export const userMessageReducer = createReducer({}, (builder) => {
    // Update profile
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

    // Update password
    builder.addCase('updatePasswordRequest', (state) => {
        state.loading = true;
    }),
    builder.addCase('updatePasswordSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload
    }),
    builder.addCase('updatePasswordFailure', (state, action) => {
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