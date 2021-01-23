import { useContext, useState } from 'react';
import styled from 'styled-components';

import useAuth from '../../src/hooks/useAuth';
import api from '../../src/services';
import { PageContainerStyle } from '../../src/styles/page-container';
import SessionContext from '../../src/contexts/session';
import { useRouter } from 'next/router';
import UsersContext from '../../src/contexts/users';
import useMatches from '../../src/hooks/useMatches';

const Menu = () => {
	useAuth();

	const router = useRouter();

	const { setSessionData, sessionData } = useContext(SessionContext);
	const { setUsers } = useContext(UsersContext);

	const [maxDistance, setMaxDistance] = useState(10000);

	const { userId } = sessionData;
	const { _id, location } = userId;
	const { coordinates } = location;
	const latitude = coordinates[1];
	const longitude = coordinates[0];

	async function getUsersHandler(e: any) {
		e.preventDefault();
		try {
			const response = await api.get(
				`users?longitude=${longitude}&latitude=${latitude}&maxDistance=${maxDistance}`,
				{
					headers: {
						user_id: _id
					}
				}
			);

			setUsers(response.data);

			router.push('/home');
		} catch (err) {
			alert('Falhar ao carregar usuários');
		}
	}

	function subDistance(e: any) {
		e.preventDefault();
		setMaxDistance(maxDistance - 1000);
	}

	function addDistance(e: any) {
		e.preventDefault();
		setMaxDistance(maxDistance + 1000);
	}

	function logoutHandler() {
		setSessionData({
			signed: false,
			userId: {
				_id: '',
				location: {
					coordinates: [0, 0]
				}
			}
		});
		router.push('/login');
	}

	return (
		<MenuPageContainerStyle>
			<MenuHeaderContainerStyle>
				<img src={'logo-menu.svg'} alt="white-logo-menu" />
			</MenuHeaderContainerStyle>
			<MenuBodyContainerStyle>
				<form>
					<button className="menu-button" onClick={subDistance}>
						-
					</button>
					<input
						type="number"
						placeholder="Distância Máxima"
						value={maxDistance / 1000}
						onChange={(e) => setMaxDistance(+e.target.value)}
						min="0"
						max="20"
					/>
					<button className="menu-button" onClick={addDistance}>
						+
					</button>
				</form>
				<button
					className="menu-button search-button"
					onClick={getUsersHandler}
				>
					PESQUISAR
				</button>
			</MenuBodyContainerStyle>
			<MenuFooterContainerStyle>
				<a onClick={logoutHandler}>Sair</a>
			</MenuFooterContainerStyle>
		</MenuPageContainerStyle>
	);
};

export default Menu;

export const MenuPageContainerStyle = styled(PageContainerStyle)`
	background: #3487aa;
`;
export const MenuHeaderContainerStyle = styled.div`
	height: 30vh;
	max-width: 600px;
	width: 90%;

	display: flex;
	align-items: center;
	justify-content: center;
`;
export const MenuBodyContainerStyle = styled.div`
	height: 60vh;
	max-width: 600px;
	width: 90%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	button {
		cursor: pointer;
	}

	.menu-button {
		background: transparent;
		min-width: 50px;
		height: 50px;

		color: white;

		display: flex;
		align-items: center;
		justify-content: center;

		border: 3px solid white;
		border-radius: 25px;

		font-family: 'Roboto';
		font-weight: 900;
		font-size: 18px;

		padding: 0 15px;

		transition: 0.5s;

		margin: 0 15px;

		&:hover {
			color: #3487aa;
			background: white;
		}
	}

	.search-button {
		margin-top: 15px;
		width: 250px;
	}

	form {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
		padding: 15px 0;

		input {
			height: 50px;
			min-width: 150px;

			border: none;
			border-radius: 25px;

			font-family: 'Roboto';
			font-weight: 400;
			font-size: 16px;
			text-align: center;
		}
	}
`;
export const MenuFooterContainerStyle = styled.div`
	height: 10vh;
	max-width: 600px;
	width: 90%;

	display: flex;
	align-items: center;
	justify-content: center;

	a {
		cursor: pointer;

		font-family: 'Roboto Slab', serif;
		text-decoration: none;
		color: white;
		font-weight: 400;
		font-size: 14px;
		line-height: 21px;

		transition: 0.5s;

		&:hover {
			color: #ccc;
		}
	}
`;
