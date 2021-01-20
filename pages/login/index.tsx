import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import WhiteMenu from '../../src/components/menu/white-menu';
import { PageContainerStyle } from '../../src/styles/page-container';
import { MainButtonStyle } from '../../src/styles/main-button';

const Login = () => {
	return (
		<PageContainerStyle>
			<WhiteMenu whiteMenu={true} />
			<PageFormHeaderStyle>
				<h1>Acesse a sua conta</h1>
			</PageFormHeaderStyle>

			<PageFormBodyStyle>
				<form>
					<input type="text" placeholder="Usuário GitHub" />
					<input type="password" placeholder="Senha" />
				</form>
				<MainButtonStyle>ENTRAR</MainButtonStyle>
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
