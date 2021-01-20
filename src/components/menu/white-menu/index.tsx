import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { PageMenuStyle } from '../../../styles/page-menu-container';

interface IWhiteMenu {
	whiteMenu?: boolean;
}

const WhiteMenu: React.FC<IWhiteMenu> = ({ whiteMenu }) => {
	return (
		<PageMenuStyle>
			{whiteMenu ? (
				<BackLinkLogoStyle href={'/'}>
					<a>
						<img src={'logo-login-register.svg'} alt="" />
					</a>
				</BackLinkLogoStyle>
			) : (
				<img src={'logo-landing.svg'} alt="" />
			)}
		</PageMenuStyle>
	);
};

export default WhiteMenu;

export const BackLinkLogoStyle = styled(Link)`
	a {
		cursor: pointer;
	}
`;
