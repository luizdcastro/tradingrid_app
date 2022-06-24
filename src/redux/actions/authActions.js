import * as constants from '../constants'

export const auth = (wallet, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/auth/${wallet}`,
        success: (response) => setAuthData(response),
        postProccessSuccess: onSuccess,
        postProccessError: onError,
    },
})

export const logoutUser = () => {
    localStorage.removeItem('auth')
    localStorage.removeItem('user')
    return { type: constants.RESET_AUTH_DATA }
};

const setAuthData = (data) => {
    const authData = {
        id: data.id,
        connected: true
    }

    localStorage.setItem('auth', JSON.stringify(authData))

    return {
        type: constants.SET_AUTH_DATA, payload: authData
    }
}