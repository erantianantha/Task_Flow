import React from "react";
import styled from "styled-components";
import { sm, xs } from "../BreakPoints";
import SearchIcon from "../Images/search-icon.svg";

const Container = styled.div`
  width: 15rem;
  min-width: 6rem;
  display: flex;
  flex-direction: row;
  gap: var(--space-2);
  align-items: center;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  height: 2.5rem;
  box-sizing: border-box;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-primary);
  padding: var(--space-2) var(--space-3);
  color: var(--text-primary);
  transition: all var(--duration-300) var(--ease-premium);
  
  &:hover {
    background: var(--bg-glass-hover);
    border-color: var(--border-secondary);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  &:focus-within {
    border-color: var(--border-focus);
    box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1), var(--shadow-lg);
    background: var(--bg-glass-hover);
  }
  
  ${sm({
    width: "10rem",
  })}
  ${xs({
    width: "26.8vw",
  })}
`;

const Input = styled.input`
  box-sizing: content-box;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  border: none;
  color: var(--text-primary);
  background-color: transparent;
  outline: none;
  height: 1rem;
  overflow: hidden;
  width: 100%;
  
  &::placeholder {
    color: var(--text-tertiary);
    font-weight: var(--font-weight-normal);
  }
  
  &:focus {
    font-weight: var(--font-weight-semibold);
    
    &::placeholder {
      color: var(--text-tertiary);
    }
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  opacity: 0.7;
  transition: opacity var(--duration-300) var(--ease-premium);
  
  ${Container}:hover & {
    opacity: 1;
  }
  
  ${xs({
    width: "18px",
    height: "18px",
  })}
`;

const SearchBar = (props) => {
  const {searchString, setSearchString} = props;
  return (
    <Container>
      <Icon src={SearchIcon} />
      <Input placeholder="Search boards..." value={searchString} onChange={e=>setSearchString(e.target.value)}/>
    </Container>
  );
};

export default SearchBar;
