import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import SessionContext from '../contexts/session';

const useAuth = () => {
	const router = useRouter();
	const { sessionData } = useContext(SessionContext);

	useEffect(() => {
		if (sessionData.signed === false) {
			router.push('/login');
		}
	}, []);

	console.log('userAuthHook', sessionData);

	return {
		sessionData
	};
};

export default useAuth;
