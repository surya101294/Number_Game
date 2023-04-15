import axios from 'axios'
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, PATCH_USER_FAILURE, PATCH_USER_REQUEST, PATCH_USER_SUCCESS, POST_USER_FAILURE, POST_USER_REQUEST, POST_USER_SUCCESS } from './actionType'

export const postData = (userData) => async (dispatch) => {
    dispatch({ type: POST_USER_REQUEST })
    let res = await axios.get(`https://test-szax.onrender.com/users`)
    let usersArr = res.data
    if (usersArr.length > 0) {
        for (let i = 0; i < usersArr.length; i++) {
            if (userData.name == usersArr[i].name) {
                return axios.get(`https://test-szax.onrender.com/users/${usersArr[i].id}`)
                    .then((res) => {
                        dispatch({ type: POST_USER_SUCCESS, payload: { ...usersArr[i], level: userData.level } })
                    })
                    .catch((err) => dispatch({ type: POST_USER_FAILURE }))
            }
        }
    } else {
        console.log(usersArr);
        return axios.post(`https://test-szax.onrender.com/users`, { name: userData.name, score: userData.score })
            .then((res) => {
                dispatch({ type: POST_USER_SUCCESS, payload: { ...res.data, level: userData.level } })
                // console.log("post",res.data)
            })
            .catch((err) => dispatch({ type: POST_USER_FAILURE }))
    }
}


export const getData = (userData) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    let res = await axios.get(`https://test-szax.onrender.com/users`)
    let usersArr = res.data
    if (usersArr.length > 0) {
        for (let i = 0; i < usersArr.length; i++) {
            if (userData.name == usersArr[i].name) {
                userData = usersArr[i]
                return axios.get(`https://test-szax.onrender.com/users/${usersArr[i].id}`)
                    .then((res) => {
                        dispatch({ type: GET_USER_SUCCESS, payload: res.data })
                        console.log("get", res.data)
                    })
                    .catch((err) => dispatch({ type: GET_USER_FAILURE }))
            }
        }
    }
}
export const del = (id) => (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })

    return axios.delete(`https://test-szax.onrender.com/users/${id}`)
        .then((res) => {
            dispatch({ type: GET_USER_SUCCESS, payload: res.data })
            console.log(res)
        })
        .catch((err) => dispatch({ type: GET_USER_FAILURE }))
}

export const patchData = (userData) => async (dispatch) => {
    try {
        dispatch({ type: PATCH_USER_REQUEST })
        let newData = {
            score: userData.score
        }
        console.log("ud", userData);
        await axios.patch(`https://test-szax.onrender.com/users/${userData.id}`, newData)
            .then((res) => {
                dispatch({ type: PATCH_USER_SUCCESS, payload: res.data })
                console.log(res.data)
            })
            .catch((err) => dispatch({ type: PATCH_USER_FAILURE }))
    }
    catch (err) {
        dispatch({ type: PATCH_USER_FAILURE })
    }
}