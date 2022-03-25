import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';


//if action creator are asynchronous  then we have to use redux thunk

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        //log in the user..
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data}); //this is reduces

        navigate('/')
    } catch(error) {
        console.log(error);
    }
};


export const signup = (formData, navigate) => async (dispatch) => {
    try {
        //sign up the user..
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data}); //this is reduces

        navigate('/')
    } catch(error) {
        console.log(error);
    }
};