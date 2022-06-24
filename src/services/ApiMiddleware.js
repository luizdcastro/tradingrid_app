import axios from "axios"
import * as constants from "../redux/constants"
import { logoutUser } from "../redux/actions/authActions"

export const ApiMiddleware = ({ dispatch }) => (next) => (action) => {
    if (action.type !== constants.API) return next(action)

    const BASE_URL = "http://localhost:8000/v1"

    const {
        url,
        method,
        success,
        data,
        onUploadProgress,
        postProccessSuccess,
        postProccessError,
    } = action.payload;

    axios({
        method,
        url: BASE_URL + url,
        data: data ? data : null,
        onUploadProgress: onUploadProgress,
    })
        .then((response) => {
            if (success) dispatch(success(response.data))
            if (postProccessSuccess) postProccessSuccess(response.data)
        })
        .catch((err) => {
            if (!err.response);
            else {
                if (err.response.data) {
                    if (err.response && err.response.status === 403) dispatch(logoutUser())
                    if (postProccessError) postProccessError(err.response.data)
                }
            }
        })
}