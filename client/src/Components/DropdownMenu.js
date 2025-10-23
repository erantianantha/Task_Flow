import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import styledComponent from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getBoards } from '../Services/boardsService';
import CardLoadingSvg from '../Images/cardLoading.svg';

const BootstrapButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	gap: '0.5rem',
	padding: '0.5rem 1rem',
	color: 'var(--text-primary)',
	backgroundColor: 'var(--bg-glass)',
	backdropFilter: 'blur(10px)',
	border: '1px solid var(--border-primary)',
	borderRadius: 'var(--radius-lg)',
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-around',
	fontWeight: 'var(--font-weight-medium)',
	fontSize: 'var(--font-size-sm)',
	transition: 'all var(--duration-300) var(--ease-premium)',

	'&:hover': {
		backgroundColor: 'var(--bg-glass-hover)',
		borderColor: 'var(--border-secondary)',
		transform: 'translateY(-2px)',
		boxShadow: 'var(--shadow-md)',
	},
	'&:active': {
		backgroundColor: 'var(--bg-glass-hover)',
		transform: 'translateY(0px)',
	},
});

const StyledMenu = styled(Menu)({
	'& .MuiPaper-root': {
		backgroundColor: 'var(--bg-glass)',
		backdropFilter: 'blur(20px)',
		border: '1px solid var(--border-primary)',
		borderRadius: 'var(--radius-xl)',
		boxShadow: 'var(--shadow-2xl)',
		marginTop: '8px',
		minWidth: '200px',
	},
});

const StyledMenuItem = styled(MenuItem)({
	borderRadius: 'var(--radius-md)',
	margin: '4px 8px',
	padding: '12px 16px',
	fontSize: 'var(--font-size-sm)',
	fontWeight: 'var(--font-weight-medium)',
	color: 'var(--text-primary)',
	transition: 'all var(--duration-300) var(--ease-premium)',
	
	'&:hover': {
		backgroundColor: 'var(--bg-glass-hover)',
		transform: 'translateX(4px)',
	},
});

const LoadingBox = styledComponent.div`
	height: 3rem;
	width: 8rem;
	padding: 0.5rem 3rem;
	background-image: url(${(props) => props.image});
	background-position: center;
	background-repeat: no-repeat;
	border-radius: var(--radius-lg);
	margin: 8px;
`;

const Span = styledComponent.span`
	font-size: var(--font-size-sm);
	font-weight: var(--font-weight-medium);
	color: var(--text-primary);
	display: block;
`;

const StyledIcon = styled(DownIcon)({
	display: 'block',
	fontSize: '1.2rem',
	color: 'var(--text-secondary)',
	transition: 'transform var(--duration-300) var(--ease-premium)',
});

export default function DropdownMenu(props) {
	const boardsData = useSelector((state) => state.boards.boardsData);
	const history = useHistory();
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	const open = Boolean(anchorEl);
	const handleClick = async (event) => {
		setAnchorEl(event.currentTarget);
		setLoading(true);
		await getBoards(true,dispatch);
		setLoading(false);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<BootstrapButton
				id='demo-positioned-button'
				aria-controls='demo-positioned-menu'
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<Span>{props.title}</Span>
				<Span>
					<StyledIcon sx={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
				</Span>
			</BootstrapButton>
			{Object.keys(boardsData).length > 0 && (
				<StyledMenu
					id='demo-positioned-menu'
					aria-labelledby='demo-positioned-button'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
				>
					{!loading ? (
						boardsData.map((item) => {
							return (
								<StyledMenuItem
									key={item._id}
									onClick={() => {
										setAnchorEl(null);
										history.push('/board/' + item._id);
									}}
								>
									<Span>{item.title}</Span>
								</StyledMenuItem>
							);
						})
					) : (
						<LoadingBox image={CardLoadingSvg} />
					)}
				</StyledMenu>
			)}
		</div>
	);
}
