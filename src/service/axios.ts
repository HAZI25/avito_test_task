import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'https://api.kinopoisk.dev/',
	headers: { 'X-API-KEY': __TOKEN__ },
});
