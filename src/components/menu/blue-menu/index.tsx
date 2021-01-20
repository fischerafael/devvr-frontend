import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { PageMenuStyle } from '../../../styles/page-menu-container';

interface IBlueMenu {
	backLink?: string;
	forwardLink?: string;
}

const BlueMenu: React.FC<IBlueMenu> = ({ backLink, forwardLink }) => {
	return (
		<HomePageMenuStyle>
			<div>
				<Link href={backLink ? backLink : 'menu'}>
					<div className="first">
						<img src={'menu.svg'} alt="" />
					</div>
				</Link>
				<div className="second">
					<img src={'simple-logo.svg'} alt="" />
				</div>
				{forwardLink ? (
					<Link href={forwardLink}>
						<div className="third">
							<div>0</div>
						</div>
					</Link>
				) : (
					<div style={{ background: 'transparent' }}></div>
				)}
			</div>
		</HomePageMenuStyle>
	);
};

export default BlueMenu;

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
