import styled from 'styled-components';

export const MainButtonStyle = styled.button`
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;

	min-width: 250px;
	height: 50px;

	border: none;
	border-radius: 25px;

	background: #3487aa;

	font-weight: 700;
	font-size: 18px;
	line-height: 21px;

	color: white;

	transition: 0.5s;

	&:hover {
		background: #333;
		color: #ccc;
	}
`;
