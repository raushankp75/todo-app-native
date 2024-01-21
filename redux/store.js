import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authReducer";
import { taskMessageReducer, getAllTasksReducer } from "./task/taskReducer";


const store = configureStore({
    reducer:{
        auth: authReducer,
        taskMessage: taskMessageReducer,
        tasks: getAllTasksReducer
    }
});

export default store;