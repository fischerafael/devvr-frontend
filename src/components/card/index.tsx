import React from 'react';
import styled from 'styled-components';

const Card = () => {
	return (
		<CardContainerStyle>
			<div className="card-info">
				<img
					src={
						'https://media.vanityfair.com/photos/5f4d3a7e1e10df7a77868a63/2:3/w_1428,h_2142,c_limit/BradPitt-GettyImages-1158782727.jpg'
					}
					alt=""
				/>
				<p>
					React, Node, Cobol, Java, Excel, HUSDHUF, hdufhufd, hushfuas
				</p>
			</div>
			<div className="card-actions">
				<button>
					<img src={'dislike.svg'} alt="" />
				</button>
				<button>
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
