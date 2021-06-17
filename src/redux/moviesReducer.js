import { moviesAPI } from '../api/api';

const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES';
// const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES' ;

let initialState = {
    popularMovies: []
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_MOVIES: {
            return {
                ...state,
                popularMovies: action.popularMovies
            };
        }
        default: 
            return state;
    }
};

export const setPopularMovies = (popularMovies) => ({
    type: SET_POPULAR_MOVIES,
    popularMovies
});

export const getPopularMovies = () => async (dispatch) => {
    try {
        const response = await moviesAPI.popular();
        const status = response.status;
        const data = response.data;
        if (status === 200) {
            dispatch(setPopularMovies(data.results));
        }
    } catch (e) {
        console.error(e);
    }
}


export default moviesReducer;