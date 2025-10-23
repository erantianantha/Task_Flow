import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
`;

const LoadingIcon = styled.div`
  width: 60px;
  height: 60px;
  border: 3px solid var(--border-primary);
  border-top: 3px solid var(--primary-500);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.div`
  font-family: var(--font-family-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  animation: ${pulse} 2s ease-in-out infinite;
`;

export default function LoadingScreen() {
  const [open] = React.useState(true);
  
  return (
    <div>
      <Backdrop
        sx={{ 
          color: '#fff', 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)'
        }}
        open={open}
      >
        <LoadingContainer>
          <LoadingIcon />
          <LoadingText>Loading...</LoadingText>
        </LoadingContainer>
      </Backdrop>
    </div>
  );
}
