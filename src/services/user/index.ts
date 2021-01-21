import api from '..';

const UserServices = {
	async create(data: {
		username: string;
		password: string;
		tech: string;
		latitude: number;
		longitude: number;
	}) {
		const response = await api.post('users', data);
		return response;
	}
};

export default UserServices;
