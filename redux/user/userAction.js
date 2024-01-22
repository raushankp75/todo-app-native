import axios from "axios";
import { serverUrl } from "../serverUrl";
import { configMultipart } from "../config";

export const updateProfile = (formData) => async (dispatch) => {
    try {
        dispatch({ type: 'updateProfileRequest' })
        const { data } = await axios.put(`${serverUrl}/user/update/me`, formData, configMultipart)
        dispatch({ type: 'updateProfileSuccess', payload: data.message })
    } catch (error) {
        dispatch({ type: 'updateProfileFailure', payload: error.response.data.message })
    }
}