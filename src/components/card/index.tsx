import React from 'react';
import styled from 'styled-components';
import { concatenateArrayOfStrings } from '../../helpers/concatenateArrayToString';

interface ICard {
	techs: string[];
	id: string;
	thumbnail: string;
	likeHandler(id: string): Promise<void>;
	dislikeHandler(id: string): Promise<void>;
}

const Card: React.FC<ICard> = ({
	thumbnail,
	techs,
	id,
	likeHandler,
	dislikeHandler
}) => {
	return (
		<CardContainerStyle>
			<div className="card-info">
				<img src={thumbnail} alt="" />
				<p>{concatenateArrayOfStrings(techs)}</p>
			</div>
			<div className="card-actions">
				<button onClick={() => dislikeHandler(id)}>
					<img src={'dislike.svg'} alt="" />
				</button>
				<button onClick={() => likeHandler(id)}>
					<img src={'like.svg'} alt="" />
				</button>
			</div>
		</CardContainerStyle>
	);
};

export default Card;

export const CardContainerStyle = styled.div`
	position: relative;
	border: 1px solid #ccc;

	.card-info {
		display: flex;

		img {
			width: 100%;
			height: 60vh;
			object-fit: cover;

			filter: brightness(90%);

			@media (max-width: 600px) {
				height: 45vh;
			}

			@media (max-width: 360px) {
				height: 60vh;
			}
		}
		p {
			width: 90%;
			position: absolute;
			bottom: 40px;
			height: 60px;
			left: 0px;
			color: white;

			padding: 0 15px;

			font: 'Roboto Slab', sans-serif;
			font-size: 12px;
			line-height: 18px;
			background: rgba(0, 0, 0, 0.2);

			@media (max-width: 600px) {
				font-size: 10px;
			}
		}
	}
	.card-actions {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 50px;

		button {
			cursor: pointer;

			background: white;

			width: 100%;
			height: 100%;

			border: 1px solid #ccc;

			transition: 0.5s;

			&:hover {
				color: white;
				background: #ccc;
			}
		}
	}
`;
