import React from 'react';
import styled from 'styled-components';
import { PageContainerStyle } from '../../src/styles/page-container';

const Menu = () => {
	return (
		<MenuPageContainerStyle>
			<MenuHeaderContainerStyle>
				<img src={'logo-menu.svg'} alt="white-logo-menu" />
			</MenuHeaderContainerStyle>
			<MenuBodyContainerStyle>
				<form>
					<button className="menu-button">-</button>
					<input type="number" placeholder="Distância Máxima" />
					<button className="menu-button">+</button>
				</form>
				<button className="menu-button search-button">PESQUISAR</button>
			</MenuBodyContainerStyle>
			<MenuFooterContainerStyle>
				<a>Sair</a>
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
