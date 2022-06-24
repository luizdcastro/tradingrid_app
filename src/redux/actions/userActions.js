import * as constants from '../constants';

export const getUser = (id) => ({
    type: constants.API,
    payload: {
        method: 'GET',
        url: `/user/${id}`,
        success: (response) => fetchMe(response)
    },
})

const fetchMe = (data) => ({
    type: constants.GET_USER,
    payload: data.data,
})
