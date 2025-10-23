import styled from "styled-components";
import { md } from "../../../BreakPoints";

export const BgContainer = styled.div`
  display: initial;
  ${md({
    display: "none",
  })}
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--bg-gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-6);
  
  ${md({
    backgroundColor: "var(--bg-gradient-primary)",
  })}
`;

export const TrelloIconContainer = styled.div`
  cursor: pointer;
  padding-top: var(--space-8);
  text-align: center;
  
  ${md({
    paddingTop: "var(--space-4)",
  })}
`;

export const Icon = styled.div`
  display: block;
  font-family: var(--font-family-display);
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-black);
  color: var(--text-primary);
  margin: 0 auto var(--space-8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  letter-spacing: var(--letter-spacing-tight);
  
  &::before {
    content: '✨';
    font-size: var(--font-size-4xl);
    transition: transform var(--duration-300) var(--ease-bounce);
  }
  
  &:hover::before {
    transform: rotate(15deg) scale(1.2);
  }
  
  ${md({
    marginBottom: "var(--space-4)",
  })}
`;

export const FormSection = styled.section`
  display: block;
  word-wrap: break-word;
  width: 100%;
`;

export const FormCard = styled.div`
  box-sizing: border-box;
  display: block;
  max-width: 420px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  background: var(--bg-glass);
  backdrop-filter: blur(30px);
  border-radius: var(--radius-3xl);
  padding: var(--space-10) var(--space-12);
  box-shadow: var(--shadow-2xl);
  border: 1px solid var(--border-primary);

  ${md({
    maxWidth: "100%",
    width: "100%",
    boxShadow: "var(--shadow-xl)",
    backgroundColor: "var(--bg-glass)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    padding: "var(--space-8) var(--space-6)",
    borderRadius: "var(--radius-2xl)",
  })}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: var(--space-6);
  
  ${md({
    gap: "var(--space-4)",
  })}
`;

export const Title = styled.h1`
  color: var(--text-primary);
  font-family: var(--font-family-display);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  text-align: center;
  margin-bottom: var(--space-4);
  background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  font-size: var(--font-size-sm);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  border: 2px solid var(--border-primary);
  background-color: var(--bg-glass);
  backdrop-filter: blur(10px);
  transition: all var(--duration-300) var(--ease-premium);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  
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

export const Button = styled.button`
  background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
  width: 100%;
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: var(--font-size-sm);
  transition: all 0.2s ease;
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

export const Hr = styled.hr`
  width: 100%;
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid var(--gray-200);
  margin: var(--space-4) 0;
  padding: 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: var(--primary-600);
  cursor: pointer;
  font-size: ${(props) => props.fontSize || 'var(--font-size-sm)'};
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    color: var(--primary-700);
    text-decoration: underline;
  }
`;