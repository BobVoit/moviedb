import * as axios from 'axios';

const apiKey = '269400ef4ba562bf7cf04b5516808091';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});


export const moviesAPI = {
    popular() {
        return instance.get(`/movie/popular?api_key=${apiKey}`);
    }
}

export const authAPI = {
    createRequestToken() {
        return instance.get(`/authentication/token/new?api_key=${apiKey}`);
    },
    createSessionId(requestToken) {
        return instance.post(`/authentication/session/new?api_key=${apiKey}`, {
            request_token: requestToken,
        });
    },
}