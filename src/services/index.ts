import axios from 'axios';

const api = axios.create({
	baseURL: 'https://devvr-backend.herokuapp.com'
});

export default api;
