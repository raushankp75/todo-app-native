import axios from "axios";
import { serverUrl } from "../serverUrl";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'loginRequest' })

        const { data } = await axios.post(`${serverUrl}/user/login`, { email, password }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // console.log(data)
        dispatch({ type: 'loginSuccess', payload: data?.message })
    } catch (error) {
        dispatch({ type: 'loginFailure', payload: error.response.data.message })
    }
}