import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authReducer";
import { taskMessageReducer, getAllTasksReducer } from "./task/taskReducer";
import { userMessageReducer } from "./user/userReducer";


const store = configureStore({
    reducer:{
        auth: authReducer,
        userMessage: userMessageReducer,
        taskMessage: taskMessageReducer,
        tasks: getAllTasksReducer
    }
});

export default store;