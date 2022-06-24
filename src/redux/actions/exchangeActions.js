import * as constants from '../constants'

export const createExchange = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/exchange',
        data,        
        success: (response) => createdExchange(response),
        postProccessSuccess: onSuccess,
        postProccessError: onError,
    },
})

export const deleteExchange = (exchangeId, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'DELETE',
        url: `/exchange/${exchangeId}`,
        success: (response) => deletedExchange(response),
        postProccessSuccess: onSuccess,
        postProccessError: onError,
    },
})

const createdExchange = (data) => ({
    type: constants.CREATE_EXCHANGE,
    payload: data,
})

const deletedExchange = (data) => ({
    type: constants.DELETE_EXCHANGE,
    payload: data,
})