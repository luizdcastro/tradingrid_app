import * as constants from '../constants'

export const createBot= (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/bot',
        data,        
        success: (response) => createdBot(response),
        postProccessSuccess: onSuccess,
        postProccessError: onError,
    },
});

export const updateBot= (data, botId, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'PATCH',
        url: `/bot/${botId}`,
        data,
        success: (response) => updatedBot(response),
        postProccessSuccess: onSuccess,
        postProccessError: onError,
    },
});

export const deleteBot= (botId,  onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'DELETE',
        url: `/bot/${botId}`,
        success: (response) => deletedBot(response),
        postProccessSuccess: onSuccess,
        postProccessError: onError,
    },
});


const createdBot= (data) => ({
    type: constants.CREATE_BOT,
    payload: data,
})

const updatedBot = (data) => ({
    type: constants.UPDATE_BOT,
    payload: data,
})

const deletedBot = (data) => ({
    type: constants.DELETE_BOT,
    payload: data,
})