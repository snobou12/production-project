import axios, { InternalAxiosRequestConfig } from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const $api = axios.create({
    baseURL: __API__,

});

$api.interceptors.request.use((config:InternalAxiosRequestConfig) => {
    const key = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (config.headers) {
        config.headers.authorization = key;
    }
    return config;
});

export default $api;
