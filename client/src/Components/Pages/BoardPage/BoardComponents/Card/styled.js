import styled from 'styled-components';

export const Container = styled.div`	
	background: var(--bg-glass);
	backdrop-filter: blur(20px);
	box-shadow: var(--shadow-lg);
	box-sizing: border-box;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: var(--space-4);
	margin: 0;
	border-radius: var(--radius-xl);
	color: var(--text-primary);
	gap: var(--space-3);
	background: ${(props) => (props.color ? props.color : 'var(--bg-glass)')};
	padding-top: ${(props) => (props.padding ? '3rem' : 'var(--space-4)')};
	border: 1px solid var(--border-primary);
	transition: all var(--duration-300) var(--ease-premium);
	cursor: pointer;
	position: relative;
	
	&:hover {
		box-shadow: var(--shadow-xl), var(--glow-primary);
		transform: translateY(-4px) scale(1.02);
		border-color: var(--border-focus);
	}
`;

export const Cover = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	border-top-left-radius: var(--radius-md);
	border-top-right-radius: var(--radius-md);
	width: 100%;
	height: 2.5rem;
	background: linear-gradient(135deg, ${(props) => props.color}, ${(props) => props.color}dd);
`;

export const LabelContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-1);
`;

export const Label = styled.div`
	width: 3rem;
	height: 0.5rem;
	background: linear-gradient(135deg, ${(props) => props.color}, ${(props) => props.color}dd);
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: var(--radius-sm);
	box-shadow: var(--shadow-sm);
`;

export const CardTitle = styled.div`
	font-size: var(--font-size-sm);
	font-weight: var(--font-weight-medium);
	max-width: 100%;
	word-wrap: break-word;
	white-space: pre-wrap;
	line-height: var(--line-height-normal);
	color: var(--text-primary);
	padding: var(--space-1) 0;
`;

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	height: auto;	
	gap: var(--space-2);
`;

export const AttachmentContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: var(--space-1);
	width: fit-content;
	justify-content: center;
	align-items: center;	
`;

export const IconGroupContainer = styled.div`	
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	height: fit-content;
`;

export const IconGroupWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-flow: row wrap;
	width: fit-content;
	align-items: center;
	justify-content: flex-start;
	color: var(--text-tertiary);
	gap: var(--space-2);
`;

export const IconWrapper = styled.div`
	margin-right: var(--space-1);
	display: flex;
	align-items: center;
`;

export const DateContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	padding: var(--space-1) var(--space-2);
	border-radius: var(--radius-sm);
	gap: var(--space-1);
	background-color: ${(props) => props.backColor};
	color: ${(props) => props.color};
	cursor: pointer;
	font-size: var(--font-size-xs);
	font-weight: 500;
	transition: all 0.2s ease;
	
	&:hover {
		background-color: ${(props) => props.hoverBg};
		transform: scale(1.05);
	}
`;

export const Span = styled.div`
	font-size: var(--font-size-xs);
	color: ${(props) => props.color};
	font-weight: 500;
`;

export const CommentContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	gap: var(--space-1);
	align-items: center;
`;

export const CheckContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	gap: var(--space-1);
	align-items: center;
`;

export const MembersContainer = styled.div`
	display: inline-block;
	margin-left: auto;
	width: fit-content;
`;

export const MembersWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: var(--space-1);
`;
