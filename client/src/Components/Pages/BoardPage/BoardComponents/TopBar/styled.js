import styled from 'styled-components';
import { xs } from '../../../../../BreakPoints';

export const TopBar = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 var(--space-8);
	justify-content: space-between;
	flex-wrap: wrap;
	gap: var(--space-6);
	background: var(--bg-glass);
	backdrop-filter: blur(20px);
	border-bottom: 1px solid var(--border-primary);
	box-shadow: var(--shadow-sm);

	${xs({
		gap: 'var(--space-3)',
		padding: '0 var(--space-4)',
		height: '60px',
	})}
`;

export const LeftWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
	align-items: center;
	justify-content: flex-start;
	height: 100%;
	gap: var(--space-4);
`;

export const RightWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	height: 100%;
	gap: var(--space-3);
`;

export const InviteButton = styled.button`
	display: flex;
	border: none;
	height: 2.5rem;
	color: white;
	padding: 0 var(--space-4);
	align-items: center;
	gap: var(--space-2);
	border-radius: var(--radius-md);
	background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
	cursor: pointer;
	transition: all 0.2s ease;
	font-size: var(--font-size-sm);
	font-weight: 600;
	box-shadow: var(--shadow-sm);
	
	&:hover {
		background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
		transform: translateY(-1px);
		box-shadow: var(--shadow-md);
	}
	
	&:active {
		transform: translateY(0);
	}
`;

export const TextSpan = styled.span`
	font-size: var(--font-size-sm);
	font-weight: 600;
	${xs({
		display: 'none',
	})}
`;

export const BoardNameInput = styled.input`
	height: 3rem;
	background: var(--bg-glass-dark);
	border: 2px solid var(--border-primary);
	border-radius: var(--radius-lg);
	font-size: var(--font-size-xl);
	text-align: left;
	padding: 0 var(--space-4);
	min-width: 8rem;
	max-width: 15rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	width: ${(props) => Math.max(props.value.length * 0.6 + 2, 8) + 'rem'};
	font-weight: var(--font-weight-bold);
	color: var(--text-primary);
	outline: none;
	transition: all var(--duration-300) var(--ease-premium);
	cursor: pointer;
	backdrop-filter: blur(10px);
	
	&:focus {
		background: var(--bg-glass-hover);
		border-color: var(--border-focus);
		color: var(--text-primary);
		cursor: text;
		box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1), var(--shadow-lg);
		transform: translateY(-2px);
	}
	
	&:hover {
		background: var(--bg-glass);
		border-color: var(--border-secondary);
		transform: translateY(-1px);
	}
	
	&::placeholder {
		color: var(--text-tertiary);
		font-weight: var(--font-weight-medium);
	}

	${xs({
		maxWidth: '10rem',
		fontSize: 'var(--font-size-lg)',
		height: '2.5rem',
	})}
`;
