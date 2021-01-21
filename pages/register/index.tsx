import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import WhiteMenu from '../../src/components/menu/white-menu';
import { PageContainerStyle } from '../../src/styles/page-container';
import { MainButtonStyle } from '../../src/styles/main-button';
import useGetPosition from '../../src/hooks/useGetPosition';
import UserServices from '../../src/services/user';

const Register = () => {
	const router = useRouter();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [tech, setTech] = useState('');
	const { latitude, longitude, setLatitude, setLongitude } = useGetPosition();

	async function createUserHandler(e: any) {
		e.preventDefault();

		const response = await UserServices.create({
			username,
			password,
			tech,
			latitude,
			longitude
		});

		alert(`Usuário ${response.data.username} criado com sucesso`);

		router.push('/login');
	}

	return (
		<PageContainerStyle>
			<WhiteMenu whiteMenu={true} />
			<PageFormHeaderStyle>
				<h1>Cadastre-se</h1>
			</PageFormHeaderStyle>

			<PageFormBodyStyle>
				<form>
					<input
						type="text"
						placeholder="Usuário GitHub"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Senha"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Tecnologias"
						value={tech}
						onChange={(e) => setTech(e.target.value)}
					/>
					<div>
						<input
							type="number"
							placeholder="Longitude"
							value={longitude}
							onChange={(e) => setLongitude(+e.target.value)}
						/>
						<input
							type="number"
							placeholder="Latitude"
							value={latitude}
							onChange={(e) => setLatitude(+e.target.value)}
						/>
					</div>
				</form>
				<MainButtonStyle onClick={createUserHandler}>
					CADASTRAR
				</MainButtonStyle>
			</PageFormBodyStyle>

			<PageFormFooterStyle>
				<Link href="login">
					<a>Já sou cadastrado</a>
				</Link>
			</PageFormFooterStyle>
		</PageContainerStyle>
	);
};

export default Register;

export const PageFormHeaderStyle = styled.div`
	height: 10vh;

	max-width: 600px;
	width: 90%;

	display: flex;
	align-items: center;
	justify-content: center;

	h1 {
		color: #333;
		font-weight: 900;
		font-size: 24px;
		line-height: 28px;
	}
`;
export const PageFormBodyStyle = styled.div`
	min-height: 65vh;

	max-width: 600px;
	width: 90%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	form {
		display: flex;
		flex-direction: column;

		width: 90%;

		margin-bottom: 7.5px;

		div {
			display: grid;
			grid-template-columns: 1fr 1fr;

			@media (max-width: 600px) {
				grid-template-columns: 1fr;
			}
		}

		input {
			height: 50px;
			border: 1px solid #ccc;
			border-radius: 25px;

			margin: 7.5px;
			padding: 0 15px;

			font-family: 'Robot', sans-serif;
			font-size: 16px;
			text-align: center;

			outline: none;
		}
	}
`;
export const PageFormFooterStyle = styled.div`
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
		color: #333;
		font-weight: 700;
		font-size: 14px;
		line-height: 21px;

		transition: 0.5s;

		&:hover {
			color: #ccc;
		}
	}
`;
