import { createContext, useState } from 'react';

interface ISessionState {
	signed: boolean;
	userId: string;
}

interface ISessionContext {
	sessionData: ISessionState;
	setSessionData(data: ISessionState): void;
}

const SessionContext = createContext<ISessionContext>({} as ISessionContext);

export const SessionProvider: React.FC = ({ children }) => {
	const [sessionData, setSessionData] = useState<ISessionState>({
		signed: false,
		userId: ''
	});

	console.log(sessionData);

	return (
		<SessionContext.Provider value={{ sessionData, setSessionData }}>
			{children}
		</SessionContext.Provider>
	);
};

export default SessionContext;
