import React from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import SearchBar from './SearchBar';
import { xs } from '../BreakPoints';
import ProfileBox from './ProfileBox';
// import ThemeToggle from './ThemeToggle'; // Temporarily disabled
import { useHistory } from 'react-router-dom';

const Container = styled.div`
	height: 5rem;
	width: 100%;
	background: var(--bg-glass);
	backdrop-filter: blur(30px);
	border-bottom: 1px solid var(--border-primary);
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 var(--space-8);
	gap: var(--space-6);
	z-index: var(--z-50);
	box-shadow: var(--shadow-xl);
	transition: all var(--duration-300) var(--ease-premium);
	
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
		opacity: 0;
		transition: opacity var(--duration-300) var(--ease-premium);
		pointer-events: none;
	}
	
	&:hover::before {
		opacity: 1;
	}
	
	${xs({
		padding: `0 var(--space-4)`,
		height: '4rem',
	})}
`;

const LeftSide = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	gap: var(--space-6);
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	${xs({
		gap: 'var(--space-2)',
		width: 'fit-content',
	})}
`;

const RightSide = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	padding: var(--space-2);
	border-radius: var(--radius-md);
	transition: all 0.2s ease;
	
	&:hover {
		background-color: var(--gray-100);
	}
`;

const TrelloLogo = styled.div`
	font-family: var(--font-family-display);
	font-size: var(--font-size-2xl);
	font-weight: var(--font-weight-black);
	color: var(--text-primary);
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: var(--space-3);
	transition: all var(--duration-300) var(--ease-premium);
	letter-spacing: var(--letter-spacing-tight);
	
	&::before {
		content: '✨';
		font-size: var(--font-size-xl);
		transition: transform var(--duration-300) var(--ease-bounce);
	}
	
	&:hover {
		color: var(--text-accent);
		transform: scale(1.05);
		
		&::before {
			transform: rotate(15deg) scale(1.2);
		}
	}
	
	&:active {
		transform: scale(0.98);
	}
`;

const DropdownContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	${xs({
		display: 'none',
	})}
`;

const Navbar = (props) => {
	const history = useHistory();

	return (
		<Container>
			<LeftSide>
				<LogoContainer>
					<TrelloLogo
						onClick={() => {
							history.push('/boards');
						}}
					>
						TaskFlow
					</TrelloLogo>
				</LogoContainer>
				<DropdownContainer>
					<DropdownMenu title='Your Boards' />
				</DropdownContainer>
			</LeftSide>
			<RightSide>
				<SearchBar searchString={props.searchString} setSearchString={props.setSearchString} />
				<ProfileBox />
			</RightSide>
		</Container>
	);
};

export default Navbar;
