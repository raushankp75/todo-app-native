import { createReducer } from "@reduxjs/toolkit";

export const authReducer = createReducer({}, (builder) => {
    // Login
    builder.addCase('loginRequest', (state) => {
        state.loading = true;
    }),
        builder.addCase('loginSuccess', (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        }),
        builder.addCase('loginFailure', (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        }),

        // Register
        builder.addCase('registerRequest', (state) => {
            state.loading = true;
        }),
        builder.addCase('registerSuccess', (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.message = action.payload.message;
        }),
        builder.addCase('registerFailure', (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        }),

        // Get profile
        builder.addCase('loadUserRequest', (state) => {
            state.loading = true;
        }),
        builder.addCase('loadUserSuccess', (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        }),
        builder.addCase('loadUserFailure', (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        }),

        // Logout
        builder.addCase('logoutRequest', (state) => {
            state.loading = true;
        }),
        builder.addCase('logoutSuccess', (state) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
        }),
        builder.addCase('logoutFailure', (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
        }),

        // User verification
        builder.addCase('userVerificationRequest', (state) => {
            state.loading = true;
        }),
        builder.addCase('userVerificationSuccess', (state, action) => {
            state.loading = false;
            state.message = action.payload
        }),
        builder.addCase('userVerificationFailure', (state, action) => {
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