import api from '..';

const SessionServices = {
	async create(data: { username: string; password: string }) {
		const response = await api.post('sessions', data);
		return response;
	}
};

export default SessionServices;
