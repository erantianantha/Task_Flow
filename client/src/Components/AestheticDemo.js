import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
  }
`;

const DemoContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  pointer-events: none;
`;

const DemoCard = styled.div`
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-xl);
  animation: ${float} 3s ease-in-out infinite, ${glow} 2s ease-in-out infinite;
  max-width: 300px;
  text-align: center;
`;

const DemoTitle = styled.h3`
  color: var(--text-primary);
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--space-3);
`;

const DemoText = styled.p`
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  margin-bottom: var(--space-4);
`;

const DemoButton = styled.button`
  background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
  color: var(--text-inverse);
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-3) var(--space-6);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-in-out);
  box-shadow: var(--shadow-md);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg), var(--shadow-glow);
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
  }
`;

const AestheticDemo = ({ onClose }) => {
  return (
    <DemoContainer>
      <DemoCard className="animate-bounceIn">
        <DemoTitle>🎨 Aesthetic UI Active!</DemoTitle>
        <DemoText>
          Experience the beautiful animations, glassmorphism effects, and addictive dark mode!
        </DemoText>
        <DemoButton onClick={onClose}>
          Got it! ✨
        </DemoButton>
      </DemoCard>
    </DemoContainer>
  );
};

export default AestheticDemo;
