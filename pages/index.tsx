import React from 'react';
import styled from 'styled-components';
import { MainButtonStyle } from '../src/styles/main-button';
import { PageContainerStyle } from '../src/styles/page-container';
import { PageMenuStyle } from '../src/styles/page-menu-container';

const Home = () => {
	return (
		<LandingPageContainerStyle>
			<PageMenuStyle>
				<img src={'logo-landing.svg'} alt="" />
			</PageMenuStyle>
			<LandingPageBodyStyle>
				<h1>Encontre devs que cruzaram seu caminho</h1>
				<p>
					Em uma esquina, terraço ou café... todos nós já nos
					deparamos com o próximo parceiro profissional.
				</p>
				<p>
					Graças ao devvr, conecte-se e aproveite as oportunidades que
					surgem.
				</p>
				<MainButtonLandingStyle>ENTRAR</MainButtonLandingStyle>
			</LandingPageBodyStyle>
		</LandingPageContainerStyle>
	);
};

export default Home;

export const LandingPageContainerStyle = styled(PageContainerStyle)`
	background-image: url('landing.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position-x: 100%;
`;
export const LandingPageMenuStyle = styled(PageMenuStyle)`
	max-width: 600px;
	width: 90%;
`;
export const LandingPageBodyStyle = styled.main`
	max-width: 600px;
	width: 90%;

	height: 85vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		color: white;
		font-size: 42px;
		font-weight: 500;

		line-height: 48px;

		width: 70%;

		margin-bottom: 45px;

		@media (max-width: 600px) {
			font-size: 36px;
			line-height: 42px;
		}
	}

	p {
		color: white;
		width: 70%;

		font-weight: 400;

		@media (max-width: 600px) {
			font-size: 12px;
		}
	}
`;
export const MainButtonLandingStyle = styled(MainButtonStyle)`
	margin-top: 45px;

	@media (max-width: 600px) {
		margin-top: 30px;
	}
`;
