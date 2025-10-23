import styled, { keyframes } from "styled-components";
import { Button } from "../../CommonStyled";

export const AddAnotherListContainer = styled.div`
  display: flex;
  flex-direction: column;  
  flex-wrap: wrap;
  overflow-y: auto;
  min-width: 280px;
  width: 280px;
  max-width: 300px;
  align-items: center;
  background: ${props => props.show ? "var(--bg-glass)" : "transparent"};
  backdrop-filter: blur(20px);
  color: var(--text-secondary);
  height: fit-content;  
  margin: 0;
  gap: var(--space-4);
  border-radius: var(--radius-2xl);
  cursor: pointer;
  transition: all var(--duration-300) var(--ease-premium);
  border: 2px dashed ${props => props.show ? "var(--border-secondary)" : "var(--border-primary)"};
  padding: var(--space-5);
  
  &:hover {
    border-color: var(--border-focus);
    background: ${props => props.show ? "var(--bg-glass-hover)" : "var(--bg-glass-dark)"};
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

export const AddAnotherListButton = styled(Button)`
  width: 100%;
  display: ${props => !props.show ? "flex" : "none"};
  background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
  color: white;
  border: none;
  padding: var(--space-3);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: var(--font-size-sm);
  transition: all 0.2s ease;
  
  &:hover {
    background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

const slideAnimation = keyframes`
 0% { height: 0rem; width: 100%; overflow: hidden; opacity: 0; }
 25% { height: 2rem; width: 100%; overflow: hidden; opacity: 0.5; }
 50% { height: 4rem; width: 100%; overflow: hidden; opacity: 0.7; }
 75% { height: 6rem; width: 100%; overflow: hidden; opacity: 0.9; }
 100% { height: auto; width: 100%; overflow: visible; opacity: 1; }
`

export const AddListContainer = styled(AddAnotherListContainer)`
  flex-direction: column;
  display: ${props => props.show ? "flex" : "none"};
  animation-name: ${props => props.show && slideAnimation};
  animation-duration: var(--duration-300);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  padding: var(--space-5);
  gap: var(--space-4);
  border: 2px solid var(--border-primary);
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
`;

export const AddListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`;

export const ListTitleInput = styled.input`
  width: 100%;
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  border: 2px solid var(--border-primary);
  outline: none;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  background-color: var(--bg-glass);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-md);
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