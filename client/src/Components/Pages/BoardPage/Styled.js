import styled from 'styled-components';

export const Container = styled.div`
	${(props) =>
		props.isImage ? 'background-image: url(' + props.bgImage + ');' : 'background: linear-gradient(135deg, ' + props.bgImage + ', ' + props.bgImage + 'dd);'}
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	padding-top: 4rem;
	min-height: 100vh;
	position: relative;
	
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.1);
		z-index: 1;
	}
	
	> * {
		position: relative;
		z-index: 2;
	}
`;

export const ListContainer = styled.div`
	box-sizing: border-box;
	min-height: calc(100vh - 4rem - 60px);
	display: flex;
	flex-direction: row;
	padding: var(--space-6);
	gap: var(--space-4);
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
	
	/* Professional Scrollbar */
	::-webkit-scrollbar {
		height: 12px;
		width: 12px;
	}

	::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-sm);
		margin: var(--space-2);
	}

	::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.3);
		border-radius: var(--radius-sm);
		transition: background-color 0.2s ease;
	}

	::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.5);
	}
	
	@media (max-width: 768px) {
		padding: var(--space-4);
		gap: var(--space-3);
	}
`;
