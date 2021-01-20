import BlueMenu from '../../src/components/menu/blue-menu';

import { PageContainerStyle } from '../../src/styles/page-container';

import React from 'react';
import styled from 'styled-components';

const Matches = () => {
	return (
		<MatchesPageContainerStyle>
			<BlueMenu backLink="home" />
			<MatchesBodyStyle>
				<MatchCardContainer>
					<img
						src="https://media.vanityfair.com/photos/5f4d3a7e1e10df7a77868a63/2:3/w_1428,h_2142,c_limit/BradPitt-GettyImages-1158782727.jpg"
						alt=""
					/>
					<div>
						<div>
							<img src={'github-logo.svg'} alt="Logo Github" />
							<p>Username</p>
						</div>
						<p>React, Node, Cobol, Delphi, Assembly</p>
					</div>
				</MatchCardContainer>
			</MatchesBodyStyle>
		</MatchesPageContainerStyle>
	);
};

export default Matches;

export const MatchCardContainer = styled.div`
	border: 1px solid #ccc;
	background: white;
	padding: 15px;

	display: grid;
	grid-template-columns: 1fr 4fr;

	height: 100px;

	align-items: center;

	img {
		width: 75px;
		height: 75px;
		object-fit: cover;
		border-radius: 37.5px;

		margin-left: 15px;
	}

	div {
		display: flex;
		flex-direction: column;

		margin-left: 15px;

		div {
			display: flex;
			flex-direction: row;

			align-items: center;

			margin-left: 0px;

			img {
				margin-left: 0;

				width: 20px;
				height: 20px;
				margin-right: 12px;
			}

			p {
				margin-top: 17px;
				color: #333;
				font-weight: 900;
				font-size: 18px;
				line-height: 24px;
			}
		}

		p {
			margin-top: -10px;
			color: #333;
			font-weight: 500;
			font-size: 10px;
			line-height: 13px;
			display: flex;
			align-items: center;
		}
	}
`;
export const MatchesBodyStyle = styled.main`
	max-width: 600px;
	width: 90%;

	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: 15px;

	padding-top: 15px;
	padding-bottom: 30px;

	@media (max-width: 360px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
export const MatchesPageContainerStyle = styled(PageContainerStyle)`
	background: #f0f0f0;
`;
