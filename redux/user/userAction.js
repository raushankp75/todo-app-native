import axios from "axios";
import { serverUrl } from "../serverUrl";
import { config, configMultipart } from "../config";

export const updateProfile = (name) => async (dispatch) => {
    try {
        dispatch({ type: 'updateProfileRequest' })
        const { data } = await axios.put(`${serverUrl}/user/update/me`, {name}, config)
        dispatch({ type: 'updateProfileSuccess', payload: data.message })
    } catch (error) {
        dispatch({ type: 'updateProfileFailure', payload: error.response.data.message })
    }
}

export const updateAvatar = (formData) => async (dispatch) => {
    try {
        dispatch({ type: 'updateAvatarRequest' })
        const { data } = await axios.put(`${serverUrl}/user/update/avatar`, formData, configMultipart)
        dispatch({ type: 'updateAvatarSuccess', payload: data.message })
    } catch (error) {
        dispatch({ type: 'updateAvatarFailure', payload: error.response.data.message })
    }
}

export const updatePassword = (oldPassword, newPassword) => async (dispatch) => {
    try {
        dispatch({ type: 'updatePasswordRequest' })
        const { data } = await axios.put(`${serverUrl}/user/update/password`, {oldPassword, newPassword}, config)
        dispatch({ type: 'updatePasswordSuccess', payload: data.message })
    } catch (error) {
        dispatch({ type: 'updatePasswordFailure', payload: error.response.data.message })
    }
}

export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: 'forgotPasswordRequest' })
        const { data } = await axios.post(`${serverUrl}/user/forget/password`, {email}, config)
        dispatch({ type: 'forgotPasswordSuccess', payload: data.message })
    } catch (error) {
        dispatch({ type: 'forgotPasswordFailure', payload: error.response.data.message })
    }
}

export const resetPassword = (otp, newPassword) => async (dispatch) => {
    try {
        dispatch({ type: 'resetPasswordRequest' })
        const { data } = await axios.put(`${serverUrl}/user/reset/password`, {otp, newPassword}, config)
        dispatch({ type: 'resetPasswordSuccess', payload: data.message })
    } catch (error) {
        dispatch({ type: 'resetPasswordFailure', payload: error.response.data.message })
    }
}