import { createContext, useState } from 'react';

interface ISessionState {
	signed: boolean;
	userId: string;
}

interface ISessionContext {
	sessionData: ISessionState;
	logIn(data: ISessionState): void;
}

const SessionContext = createContext<ISessionContext>({} as ISessionContext);

export const SessionProvider: React.FC = ({ children }) => {
	const [sessionData, setSessionData] = useState<ISessionState>({
		signed: false,
		userId: ''
	});

	function logIn(data: ISessionState) {
		setSessionData(data);
	}

	console.log(sessionData);

	return (
		<SessionContext.Provider value={{ sessionData, logIn }}>
			{children}
		</SessionContext.Provider>
	);
};

export default SessionContext;
