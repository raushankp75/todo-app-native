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

    // Update avatar
    builder.addCase('updateAvatarRequest', (state) => {
        state.loading = true;
    }),
    builder.addCase('updateAvatarSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload
    }),
    builder.addCase('updateAvatarFailure', (state, action) => {
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
    
    // Forgot password
    builder.addCase('forgotPasswordRequest', (state) => {
        state.loading = true;
    }),
    builder.addCase('forgotPasswordSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload
    }),
    builder.addCase('forgotPasswordFailure', (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }),

    // Reset password
    builder.addCase('resetPasswordRequest', (state) => {
        state.loading = true;
    }),
    builder.addCase('resetPasswordSuccess', (state, action) => {
        state.loading = false;
        state.message = action.payload
    }),
    builder.addCase('resetPasswordFailure', (state, action) => {
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