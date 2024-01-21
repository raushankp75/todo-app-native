import axios from "axios";
import { serverUrl } from "../serverUrl";
import { config } from "../config";

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


export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: 'loadUserRequest' })

        const { data } = await axios.get(`${serverUrl}/user/me`)

        dispatch({ type: 'loadUserSuccess', payload: data })
    } catch (error) {
        dispatch({ type: 'loadUserFailure', payload: error.response.data.message })
    }
}