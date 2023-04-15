import React from 'react'
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, PATCH_USER_FAILURE, PATCH_USER_REQUEST, PATCH_USER_SUCCESS, POST_USER_FAILURE, POST_USER_REQUEST, POST_USER_SUCCESS } from './actionType'
const initialState = {
    isAuth: false,
    level: "",
    name: "",
    id:null,
    score: 0,
    isLoading: false,
    isError: false,
}

const reducer = (state = initialState, { type, payload }) => {
    console.log("payload",payload)
    switch (type) {
        case POST_USER_REQUEST:
            return { ...state, isLoading: true }

        case POST_USER_SUCCESS:
            console.log({ ...state, isLoading: false, level: payload.level,score:payload.score, name: payload.name,id: payload.id, isAuth: true })
            return { ...state, isLoading: false, level: payload.level,score:payload.score, name: payload.name,id: payload.id, isAuth: true }

        case POST_USER_FAILURE:
            return { ...state, isError: false }

        case GET_USER_REQUEST:
            return { ...state, isLoading: true }

        case GET_USER_SUCCESS:
            return { ...state, isLoading: false, score: payload.score }

        case GET_USER_FAILURE:
            return { ...state, isError: false }


        case PATCH_USER_REQUEST:
            return { ...state, isLoading: true }

        case PATCH_USER_SUCCESS:
            console.log(payload);
            return { ...state, isLoading: false, score: payload.score }

        case PATCH_USER_FAILURE:
            return { ...state, isError: false }

        default: return state
    }
}

export { reducer }