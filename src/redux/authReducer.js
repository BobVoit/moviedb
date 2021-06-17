import { authAPI } from '../api/api';

const SET_REQUEST_TOKEN = 'SET_REQUEST_TOKEN';
const SET_SESSION_ID = 'SET_SESSION_ID';

let initialState = {
    requestToken: null,
    sessionId: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REQUEST_TOKEN: {
            return {
                ...state, 
                requestToken: action.requestToken
            }
        }
        case SET_SESSION_ID: {
            return {
                ...state,
                sessionId: action.sessionId
            }
        }
        default: 
            return state;
    }
};

export const setRequestToken = (requestToken) => ({
    type: SET_REQUEST_TOKEN,
    requestToken
});

export const setSessionId = (sessionId) => ({
    type: SET_SESSION_ID,
    sessionId
});

export const createNewSessionId = () => async (dispatch, getState) => {
    try {
        const { requestToken } = getState().auth.requestToken; 
        const response = await authAPI.createSessionId(requestToken);
        const state = response.status;
        const data = response.data;
        if (state === 200 && data.success) {
            dispatch(setSessionId(data.session_id));
        }
    } catch (e) {
        console.error(e);
    }
};

export const createRequestToken = () => async (dispatch) => {
    try {
        const response = await authAPI.createRequestToken();
        const status = response.status;
        const data = response.data;
        if (status === 200 && data.success) {
            dispatch(setRequestToken(data.session_id));
        }
    } catch (e) {
        console.error(e);
    }
};

export default authReducer;