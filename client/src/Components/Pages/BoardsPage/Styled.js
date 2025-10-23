import styled from 'styled-components';

export const Container = styled.div`
	background: linear-gradient(135deg, var(--gray-50) 0%, var(--primary-50) 100%);
	min-height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	padding-top: 4rem;
`;

export const Title = styled.h1`
	font-size: var(--font-size-3xl);
	font-weight: 700;
	color: var(--gray-900);
	text-align: center;
	width: 100%;
	margin-bottom: var(--space-8);
	user-select: none;
	background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
`;

export const Wrapper = styled.div`
	width: 100%;
	min-height: calc(100vh - 4rem);
	padding: var(--space-8) var(--space-6);
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: var(--space-6);
	align-content: start;
	overflow-y: auto;
	max-width: 1400px;
	margin: 0 auto;
	
	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: var(--space-4);
		padding: var(--space-6) var(--space-4);
	}
`;

export const Board = styled.div`
	color: white;
	padding: var(--space-6);
	margin: 0;
	width: 100%;
	height: 160px;
	border-radius: var(--radius-xl);
	${(props) =>
		props.isImage ? 'background-image: url(' + props.link + ');' : 'background: linear-gradient(135deg, ' + props.link + ', ' + props.link + 'dd);'}

	background-position: center center;
	background-size: cover;
	box-shadow: var(--shadow-lg);
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;
	overflow: hidden;
	
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3));
		transition: all 0.3s ease;
	}
	
	&:hover {
		transform: translateY(-4px) scale(1.02);
		box-shadow: var(--shadow-xl);
		
		&::before {
			background: linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.4));
		}
	}
	
	&:active {
		transform: translateY(-2px) scale(1.01);
	}
`;

export const AddBoard = styled.div`
	background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
	color: white;
	padding: var(--space-6);
	margin: 0;
	width: 100%;
	height: 160px;
	border-radius: var(--radius-xl);
	font-size: var(--font-size-lg);
	font-weight: 600;
	transition: all 0.3s ease;
	opacity: 0.9;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	cursor: pointer;
	border: 2px dashed rgba(255, 255, 255, 0.3);
	position: relative;
	overflow: hidden;
	
	&::before {
		content: '+';
		font-size: var(--font-size-4xl);
		font-weight: 300;
		margin-bottom: var(--space-2);
		opacity: 0.8;
	}
	
	&:hover {
		opacity: 1;
		transform: translateY(-4px) scale(1.02);
		box-shadow: var(--shadow-xl);
		border-color: rgba(255, 255, 255, 0.5);
		background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
	}
	
	&:active {
		transform: translateY(-2px) scale(1.01);
	}
`;
