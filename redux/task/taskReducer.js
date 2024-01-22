import { createReducer } from "@reduxjs/toolkit";

export const taskMessageReducer = createReducer({}, (builder) => {
    builder.addCase('addTaskRequest', (state) => {
        state.loading = true;
    }),
        builder.addCase('addTaskSuccess', (state, action) => {
            state.loading = false;
            state.message = action.payload
        }),
        builder.addCase('addTaskFailure', (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }),
        builder.addCase('updateTaskRequest', (state) => {
            state.loading = true;
        }),
        builder.addCase('updateTaskSuccess', (state, action) => {
            state.loading = false;
            state.message = action.payload
        }),
        builder.addCase('updateTaskFailure', (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }),
        builder.addCase('updateTaskStatusRequest', (state) => {
            state.loading = true;
        }),
        builder.addCase('updateTaskStatusSuccess', (state, action) => {
            state.loading = false;
            state.message = action.payload
        }),
        builder.addCase('updateTaskStatusFailure', (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }),
        builder.addCase('deleteTaskRequest', (state) => {
            state.loading = true;
        }),
        builder.addCase('deleteTaskSuccess', (state, action) => {
            state.loading = false;
            state.message = action.payload
        }),
        builder.addCase('deleteTaskFailure', (state, action) => {
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

export const getAllTasksReducer = createReducer({}, (builder) => {
    builder.addCase('taskListRequest', (state) => {
        state.loading = true;
    }),
        builder.addCase('taskListSuccess', (state, action) => {
            state.loading = false;
            state.tasks = action.payload
        }),
        builder.addCase('taskListFailure', (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
})