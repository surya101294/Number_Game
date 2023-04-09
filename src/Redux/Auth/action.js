import axios from 'axios'
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, PATCH_USER_FAILURE, PATCH_USER_REQUEST, PATCH_USER_SUCCESS, POST_USER_FAILURE, POST_USER_REQUEST, POST_USER_SUCCESS } from './actionType'

export const postData=(userData)=>(dispatch)=>{
    dispatch({type:POST_USER_REQUEST})
    
    return axios.post(`https://test-szax.onrender.com/users`, userData)
    .then((res)=> {
        dispatch({type:POST_USER_SUCCESS, payload:res.data})
        console.log(res.data)})
    .catch((err)=> dispatch({type:POST_USER_FAILURE}))
}

export const getData=(user)=>(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    
    return axios.get(`https://test-szax.onrender.com/users?q=${user}`)
    .then((res)=> {
        dispatch({type:GET_USER_SUCCESS, payload:res.data})
        console.log(res)})
    .catch((err)=> dispatch({type:GET_USER_FAILURE}))
}

export const patchData=(userData)=>async(dispatch)=>{
    try{

        dispatch({type:PATCH_USER_REQUEST})
        let newData={
            score: userData.score
        }
        console.log("ud",userData);
        await axios.patch(`https://test-szax.onrender.com/users?name=${userData.name}`, newData)
        .then((res)=> {
            dispatch({type:PATCH_USER_SUCCESS, payload:res[0].data})
            console.log(res[0].data)})
        .catch((err)=> dispatch({type:PATCH_USER_FAILURE}))
    }
    catch(err){
        dispatch({type:PATCH_USER_FAILURE})
    }
    }


    //score update = patch
    //data show// so make get req. of all