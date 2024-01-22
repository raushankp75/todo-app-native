import axios from "axios";
import { serverUrl } from "../serverUrl";
import { config, configMultipart } from "../config";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'loginRequest' })

        const { data } = await axios.post(`${serverUrl}/user/login`, { email, password }, config)

        // console.log(data)
        dispatch({ type: 'loginSuccess', payload: data })
    } catch (error) {
        dispatch({ type: 'loginFailure', payload: error.response.data.message })
    }
}

export const register = (formData) => async (dispatch) => {
    try {
        dispatch({ type: 'registerRequest' })
        await axios.post(`${serverUrl}/user/register`, formData, configMultipart)
        dispatch({ type: 'registerSuccess', payload: data })
    } catch (error) {
        dispatch({ type: 'registerFailure', payload: error.response.data.message })
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: 'loadUserRequest' })

        const { data } = await axios.get(`${serverUrl}/user/me`)

        dispatch({ type: 'loadUserSuccess', payload: data })
    } catch (error) {
        dispatch({ type: 'loadUserFailure', payload: error.response.data.message })
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: 'logoutRequest' })
        await axios.get(`${serverUrl}/user/logout`)
        dispatch({ type: 'logoutSuccess' })
    } catch (error) {
        dispatch({ type: 'logoutFailure', payload: error.response.data.message })
    }
}