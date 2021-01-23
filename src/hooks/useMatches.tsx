import React, { useContext, useEffect, useState } from 'react';
import SessionContext from '../contexts/session';
import api from '../services';

const useMatches = (users?: any) => {
	const { sessionData } = useContext(SessionContext);
	const { userId } = sessionData;
	const { _id } = userId;

	const [matches, setMatches] = useState([]);

	useEffect(() => {
		getMatches();
	}, [users]);

	async function getMatches() {
		try {
			const matches = await api.get('users/matches', {
				headers: {
					user_id: _id
				}
			});

			const { data } = matches;

			setMatches(data);
		} catch (err) {
			console.log(err);
			setMatches([]);
		}
	}

	return { matches, setMatches };
};

export default useMatches;
