import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { PageContainerStyle } from '../../src/styles/page-container';
import { PageMenuStyle } from '../../src/styles/page-menu-container';
import Card from '../../src/components/card';

const Home = () => {
	return (
		<PageContainerStyle>
			<HomePageMenuStyle>
				<div>
					<Link href="menu">
						<div className="first">
							<img src={'menu.svg'} alt="" />
						</div>
					</Link>
					<div className="second">
						<img src={'simple-logo.svg'} alt="" />
					</div>
					<Link href="matches">
						<div className="third">
							<div>0</div>
						</div>
					</Link>
				</div>
			</HomePageMenuStyle>
			<HomePageBodyStyle>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</HomePageBodyStyle>
		</PageContainerStyle>
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
