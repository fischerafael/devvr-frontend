import { PageContainerStyle } from '../../src/styles/page-container';
import { PageMenuStyle } from '../../src/styles/page-menu-container';

import Card from '../../src/components/card';
import BlueMenu from '../../src/components/menu/blue-menu';

import UsersContext from '../../src/contexts/users';

import useAuth from '../../src/hooks/useAuth';
import useMatches from '../../src/hooks/useMatches';

import api from '../../src/services';

import React, { useContext } from 'react';
import styled from 'styled-components';

const Home = () => {
	const { sessionData } = useAuth();
	const { userId } = sessionData;
	const { _id } = userId;

	const { users, setUsers } = useContext(UsersContext);

	const { matches } = useMatches(users);

	async function likeHandler(id: string) {
		try {
			await api.post(`/likes/${id}`, null, {
				headers: {
					user_id: _id
				}
			});

			setUsers(users.filter((user) => user._id !== id));
		} catch (err) {
			alert('Erro ao curtir dev. Tente novamente');
			console.log(err);
		}
	}

	async function dislikeHandler(id: string) {
		try {
			await api.post(`/dislikes/${id}`, null, {
				headers: {
					user_id: _id
				}
			});

			setUsers(users.filter((user) => user._id !== id));
		} catch (err) {
			alert('Erro ao não curtir dev. Tente novamente');
			console.log(err);
		}
	}

	return (
		<HomePageContainerStyle>
			<BlueMenu
				backLink="menu"
				forwardLink="matches"
				matches={matches.length}
			/>
			<HomePageBodyStyle>
				{users &&
					users.map((user) => (
						<Card
							key={user._id}
							id={user._id}
							techs={user.tech}
							thumbnail={user.thumbnail}
							likeHandler={likeHandler}
							dislikeHandler={dislikeHandler}
						/>
					))}
			</HomePageBodyStyle>
		</HomePageContainerStyle>
	);
};

export default Home;

export const HomePageBodyStyle = styled.main`
	max-width: 600px;
	width: 90%;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 15px;

	padding-top: 15px;
	padding-bottom: 30px;

	@media (max-width: 360px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const HomePageMenuStyle = styled(PageMenuStyle)`
	background: #3487aa;

	max-width: 100vw;
	width: 100%;

	div {
		max-width: 600px;
		width: 90%;

		display: flex;
		align-items: center;
		justify-content: space-between;

		.first {
			display: flex;
			justify-content: flex-start;
			cursor: pointer;
		}

		.second {
			display: flex;
			justify-content: center;
		}

		.third {
			display: flex;
			justify-content: flex-end;
			cursor: pointer;

			div {
				background: white;
				height: 32px;
				width: 32px;
				border-radius: 16px;

				display: flex;

				align-items: center;
				justify-content: center;
			}
		}
	}
`;
export const HomePageContainerStyle = styled(PageContainerStyle)`
	background: #f0f0f0;
`;
