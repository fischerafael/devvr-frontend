import { createContext, useState } from 'react';

interface ISessionState {
	signed: boolean;
	userId: {
		_id: string;
		location: {
			coordinates: number[];
		};
	};
}

interface ISessionContext {
	sessionData: ISessionState;
	setSessionData(data: ISessionState): void;
}

const SessionContext = createContext<ISessionContext>({} as ISessionContext);

export const SessionProvider: React.FC = ({ children }) => {
	const [sessionData, setSessionData] = useState<ISessionState>({
		signed: false,
		userId: {
			_id: '',
			location: {
				coordinates: [0, 0]
			}
		}
	});

	return (
		<SessionContext.Provider value={{ sessionData, setSessionData }}>
			{children}
		</SessionContext.Provider>
	);
};

export default SessionContext;
