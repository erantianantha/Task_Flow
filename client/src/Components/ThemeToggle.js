import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../Context/ThemeContext';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ThemeToggleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  border-radius: var(--radius-lg);
  background: ${props => props.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.isDark 
      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))'
    };
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.isDark 
      ? '0 10px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      : '0 10px 25px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.2)'
    };
    
    &::before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
  }
`;

const ToggleButton = styled.button`
  position: relative;
  width: 50px;
  height: 26px;
  border-radius: 13px;
  border: none;
  background: ${props => props.isDark 
    ? 'linear-gradient(135deg, #1e293b, #334155)'
    : 'linear-gradient(135deg, #e2e8f0, #cbd5e1)'
  };
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.isDark 
    ? 'inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
    : 'inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1)'
  };
  
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.isDark ? '24px' : '2px'};
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${props => props.isDark 
      ? 'linear-gradient(135deg, #fbbf24, #f59e0b)'
      : 'linear-gradient(135deg, #ffffff, #f8fafc)'
    };
    box-shadow: ${props => props.isDark 
      ? '0 2px 8px rgba(251, 191, 36, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      : '0 2px 8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1)'
    };
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    animation: ${props => props.isDark ? pulse : 'none'} 2s infinite;
  }
  
  &:hover::before {
    transform: ${props => props.isDark ? 'scale(1.1)' : 'scale(1.05)'};
    box-shadow: ${props => props.isDark 
      ? '0 4px 12px rgba(251, 191, 36, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2)'
      : '0 4px 12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15)'
    };
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
  
  svg {
    width: 16px;
    height: 16px;
    transition: all 0.3s ease;
    animation: ${props => props.isDark ? rotate : 'none'} 2s linear infinite;
  }
`;

const Label = styled.span`
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: ${props => props.isDark ? 'var(--gray-100)' : 'var(--gray-700)'};
  transition: all 0.3s ease;
  animation: ${slideIn} 0.3s ease-out;
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ThemeToggleContainer isDark={isDarkMode} onClick={toggleTheme}>
      <IconContainer isDark={isDarkMode}>
        {isDarkMode ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
          </svg>
        )}
      </IconContainer>
      <ToggleButton isDark={isDarkMode} />
      <Label isDark={isDarkMode}>
        {isDarkMode ? 'Dark' : 'Light'}
      </Label>
    </ThemeToggleContainer>
  );
};

export default ThemeToggle;
