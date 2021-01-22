import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import WhiteMenu from '../../src/components/menu/white-menu';
import { PageContainerStyle } from '../../src/styles/page-container';
import { MainButtonStyle } from '../../src/styles/main-button';
import SessionServices from '../../src/services/session/idex';
import SessionContext from '../../src/contexts/session';

const Login = () => {
	const router = useRouter();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { setSessionData } = useContext(SessionContext);

	async function loginHandler(e: any) {
		e.preventDefault();
		try {
			const response = await SessionServices.create({
				username,
				password
			});

			setSessionData({ signed: true, userId: response.data._id });

			alert(`Usuário ${response.data.username} entrou com sucesso`);

			router.push('/menu');
		} catch (err) {
			alert('Falha ao acessar o sistema, tente novamente.');

			setUsername('');
			setPassword('');
		}
	}

	return (
		<PageContainerStyle>
			<WhiteMenu whiteMenu={true} />
			<PageFormHeaderStyle>
				<h1>Acesse a sua conta</h1>
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
				</form>
				<MainButtonStyle onClick={loginHandler}>ENTRAR</MainButtonStyle>
			</PageFormBodyStyle>

			<PageFormFooterStyle>
				<Link href="register">
					<a>Ainda não sou cadastrado</a>
				</Link>
			</PageFormFooterStyle>
		</PageContainerStyle>
	);
};

export default Login;

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
