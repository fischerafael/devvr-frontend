import { createContext, useState } from 'react';

interface IUserData {
	_id: string;
	username: string;
	thumbnail: string;
	tech: string[];
	location: {
		coordinates: number[];
	};
}

interface IUsersContext {
	users: IUserData[];
	setUsers(data: object[]): void;
}

const UsersContext = createContext<IUsersContext>({} as IUsersContext);

export const UsersProvider: React.FC = ({ children }) => {
	const [users, setUsers] = useState([]);

	return (
		<UsersContext.Provider value={{ users, setUsers }}>
			{children}
		</UsersContext.Provider>
	);
};

export default UsersContext;
