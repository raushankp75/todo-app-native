import axios from "axios";
import { serverUrl } from "../serverUrl";
import { config } from "../config";

export const addTask = (title, description) => async (dispatch) => {
    try {
        dispatch({ type: 'addTaskRequest' })
        const { data } = await axios.post(`${serverUrl}/task/add`, { title, description }, config)
        dispatch({ type: 'addTaskSuccess', payload: data.message })
    } catch (error) {
        dispatch({ type: 'addTaskFailure', payload: error.response.data.message })
    }
}

export const getAllTasks = () => async (dispatch) => {
    try {
        dispatch({ type: 'taskListRequest' })
        const { data } = await axios.get(`${serverUrl}/task/tasklist`)
        dispatch({ type: 'taskListSuccess', payload: data })
    } catch (error) {
        dispatch({ type: 'taskListFailure', payload: error.response.data.message })
    }
}

export const updateTask = (title, description, taskId) => async (dispatch) => {
    try {
        dispatch({ type: 'updateTaskRequest' })
        const { data } = await axios.put(`${serverUrl}/task/${taskId}`, { title, description }, config)
        dispatch({ type: 'updateTaskSuccess', payload: data.message })
    } catch (error) {
        dispatch({ type: 'updateTaskFailure', payload: error.response.data.message })
    }
}

export const updateTaskStatus = (taskId) => async (dispatch) => {
    try {
        dispatch({ type: 'updateTaskStatusRequest' })
        const { data } = await axios.get(`${serverUrl}/task/status/${taskId}`)
        dispatch({ type: 'updateTaskStatusSuccess', payload: data.message })
    } catch (error) {
        dispatch({ type: 'updateTaskStatusFailure', payload: error.response.data.message })
    }
}

export const deleteTask = (taskId) => async (dispatch) => {
    try {
        dispatch({ type: 'deleteTaskRequest' })
        const { data } = await axios.delete(`${serverUrl}/task/${taskId}`)
        dispatch({ type: 'deleteTaskSuccess', payload: data.message })
    } catch (error) {
        dispatch({ type: 'deleteTaskFailure', payload: error.response.data.message })
    }
}