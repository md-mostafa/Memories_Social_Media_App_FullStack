import * as api from '../api';

//action creators is a function that returns action

export const getPosts = () => async (dispatch) => {            //this is redux thunk
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
        
    } catch (error) {
        console.log(error.message);
    }


    //const action = { type:  'FETCH_ALL', payload: [] }

    //return action;
    //dispatch(action);
}