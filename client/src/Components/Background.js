import React from "react";
import styled, { keyframes } from "styled-components";
import LeftImage from "../Images/trello-left.svg";
import RightImage from "../Images/trello-right.svg";

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(1deg);
  }
  66% {
    transform: translateY(-10px) rotate(-1deg);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Container = styled.div`
  background: var(--bg-gradient-primary);
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: -900;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(14, 165, 233, 0.1) 50%,
      transparent 70%
    );
    background-size: 200% 200%;
    animation: ${shimmer} 8s ease-in-out infinite;
    pointer-events: none;
  }
`;

const LeftSide = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -999;
  width: 30vw;
  max-width: 400px;
  opacity: 0.6;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: 0s;
`;

const RightSide = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -999;
  width: 30vw;
  max-width: 400px;
  opacity: 0.6;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: 3s;
`;

const Svg = styled.img`
  vertical-align: middle;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  transition: all var(--duration-300) var(--ease-premium);
  
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
  }
`;

const Background = () => {
  return (
    <Container>
      <LeftSide>
        <Svg src={LeftImage} alt="Left decorative element" />
      </LeftSide>
      <RightSide>
        <Svg src={RightImage} alt="Right decorative element" />
      </RightSide>
    </Container>
  );
};

export default Background;
