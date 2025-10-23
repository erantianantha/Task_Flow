import styled from 'styled-components';
import { xs } from '../../../../../BreakPoints';

export const Container = styled.div`
	box-sizing: content-box;
	border: 1px solid var(--border-primary);
	height: fit-content;
	max-height: 98%;
	min-width: 280px;
	width: 280px;
	max-width: 300px;
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: var(--space-4);
	border-radius: var(--radius-2xl);
	background: var(--bg-glass);
	backdrop-filter: blur(20px);
	padding: var(--space-5);
	box-shadow: var(--shadow-xl);
	transition: all var(--duration-300) var(--ease-premium);
	
	&:hover {
		box-shadow: var(--shadow-2xl), var(--glow-primary);
		transform: translateY(-4px);
		border-color: var(--border-focus);
	}
`;

export const Header = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: var(--space-3);
`;

export const TitlePlaceholder = styled.div`
	display: ${(props) => (props.show ? 'none' : 'block')};
	width: 100%;
	padding: var(--space-3);
	border: none;
	border-radius: var(--radius-lg);
	background-color: transparent;
	font-size: var(--font-size-base);
	font-weight: var(--font-weight-semibold);
	color: var(--text-primary);
	outline: none;
	cursor: pointer;
	transition: all var(--duration-300) var(--ease-premium);
	
	&:hover {
		background-color: var(--bg-glass-dark);
		color: var(--text-accent);
	}
`;

export const TitleInput = styled.input`
	display: ${(props) => (props.show ? 'block' : 'none')};
	width: 100%;
	padding: var(--space-3);
	border: 2px solid var(--border-primary);
	border-radius: var(--radius-lg);
	background-color: var(--bg-glass);
	backdrop-filter: blur(10px);
	font-size: var(--font-size-base);
	font-weight: var(--font-weight-semibold);
	color: var(--text-primary);
	outline: none;
	cursor: text;
	transition: all var(--duration-300) var(--ease-premium);
	
	&:focus {
		border-color: var(--border-focus);
		box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1), var(--shadow-lg);
		background-color: var(--bg-glass-hover);
		transform: translateY(-2px);
	}
	
	&::placeholder {
		color: var(--text-tertiary);
		font-weight: var(--font-weight-normal);
	}
`;

export const CardContainer = styled.div`
	height: 100%;
	width: 100%;		
	box-sizing: content-box;
`;

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	box-sizing: content-box;
	overflow-x: hidden;
	overflow-y: auto;
	height: fit-content;
	max-height: ${props=> props.dock? "73.5vh" :"70.6vh"};
	justify-content: flex-start;
	padding: var(--space-1);
	width: 100%;
	gap: var(--space-2);
	
	${xs({
		maxHeight: props=> props.dock? "74.6vh" :"70.6vh",
	})}
	
	::-webkit-scrollbar {
		width: 6px;
	}
	
	::-webkit-scrollbar-track {
		background: var(--bg-tertiary);
		border-radius: var(--radius-sm);
	}
	
	::-webkit-scrollbar-thumb {
		background: var(--border-secondary);
		border-radius: var(--radius-sm);
		transition: background-color var(--duration-300) var(--ease-premium);
	}
	
	::-webkit-scrollbar-thumb:hover {
		background: var(--border-tertiary);
	}
`;

export const FooterButton = styled.button`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: transparent;
	border: none;
	border-radius: var(--radius-lg);
	align-self: flex-end;
	justify-self: flex-end;
	cursor: pointer;
	gap: var(--space-2);
	color: var(--text-tertiary);
	padding: var(--space-3);
	transition: all var(--duration-300) var(--ease-premium);
	font-size: var(--font-size-sm);
	font-weight: var(--font-weight-medium);
	
	&:hover {
		background-color: var(--bg-glass-dark);
		color: var(--text-accent);
		transform: translateX(4px);
	}
`;

export const Span = styled.span`
	font-size: var(--font-size-sm);
`;

export const AddTitleCardContainer = styled.div`
	box-sizing: border-box;
	margin-top: var(--space-2);
	padding: 0;
	min-width: 100%;
	width: 100%;
	display: flex;
	flex-flow: column wrap;
	gap: var(--space-3);
`;

export const TitleNewCardInput = styled.textarea`
	border: 2px solid var(--border-primary);
	border-radius: var(--radius-lg);
	resize: none;
	font-size: var(--font-size-sm);
	color: var(--text-primary);
	padding: var(--space-4);
	min-height: 4rem;
	max-height: 7rem;	
	height: ${(props) => props.height};
	transition: all var(--duration-300) var(--ease-premium);
	outline: none;
	background-color: var(--bg-glass);
	backdrop-filter: blur(10px);
	box-shadow: var(--shadow-md);
	
	&:focus {
		border-color: var(--border-focus);
		box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1), var(--shadow-lg);
		background-color: var(--bg-glass-hover);
		transform: translateY(-2px);
	}
	
	&::placeholder {
		font-weight: var(--font-weight-medium);
		color: var(--text-tertiary);
	}
`;
