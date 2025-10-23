import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory } from 'react-router-dom';

const heroFloat = keyframes`
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

const textGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 20px rgba(14, 165, 233, 0.5);
  }
  50% {
    text-shadow: 0 0 30px rgba(14, 165, 233, 0.8), 0 0 40px rgba(168, 85, 247, 0.3);
  }
`;

const particleFloat = keyframes`
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-30px) translateX(10px);
  }
  50% {
    transform: translateY(-20px) translateX(-15px);
  }
  75% {
    transform: translateY(-40px) translateX(5px);
  }
`;

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: var(--bg-gradient-primary);
  padding: var(--space-6);
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
  z-index: 10;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-8);
    text-align: center;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
`;

const HeroTitle = styled.h1`
  font-family: var(--font-family-display);
  font-size: var(--font-size-6xl);
  font-weight: var(--font-weight-black);
  line-height: var(--line-height-tight);
  color: var(--text-primary);
  margin: 0;
  animation: ${textGlow} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
  
  @media (max-width: 480px) {
    font-size: var(--font-size-3xl);
  }
`;

const HeroSubtitle = styled.p`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
  line-height: var(--line-height-relaxed);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const HeroVisual = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
`;

const FloatingCard = styled.div`
  position: absolute;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-3xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-2xl);
  animation: ${heroFloat} 6s ease-in-out infinite;
  
  &:nth-child(1) {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
    z-index: 3;
  }
  
  &:nth-child(2) {
    top: 50%;
    right: 20%;
    animation-delay: 2s;
    z-index: 2;
  }
  
  &:nth-child(3) {
    bottom: 20%;
    left: 30%;
    animation-delay: 4s;
    z-index: 1;
  }
`;

const CardTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin: 0 0 var(--space-2) 0;
`;

const CardContent = styled.p`
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  margin: 0;
`;

const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary-500);
  border-radius: 50%;
  animation: ${particleFloat} 8s ease-in-out infinite;
  
  &:nth-child(1) {
    top: 20%;
    left: 20%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    top: 40%;
    right: 30%;
    animation-delay: 2s;
  }
  
  &:nth-child(3) {
    bottom: 30%;
    left: 40%;
    animation-delay: 4s;
  }
  
  &:nth-child(4) {
    top: 60%;
    right: 10%;
    animation-delay: 6s;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
  margin-top: var(--space-20);
  padding: var(--space-16) var(--space-6);
`;

const FeatureCard = styled.div`
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-3xl);
  padding: var(--space-8);
  text-align: center;
  transition: all var(--duration-300) var(--ease-premium);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(168, 85, 247, 0.1));
    opacity: 0;
    transition: opacity var(--duration-300) var(--ease-premium);
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: var(--shadow-2xl), var(--glow-primary);
    border-color: var(--border-focus);
    
    &::before {
      opacity: 1;
    }
  }
`;

const FeatureIcon = styled.div`
  font-size: var(--font-size-4xl);
  margin-bottom: var(--space-4);
`;

const FeatureTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin: 0 0 var(--space-3) 0;
`;

const FeatureDescription = styled.p`
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  line-height: var(--line-height-relaxed);
  margin: 0;
`;

const LandingPage = () => {
  const history = useHistory();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <HeroContainer>
        <HeroContent className={isVisible ? 'animate-fadeInUp' : ''}>
          <HeroText>
            <HeroTitle>
              TaskFlow
              <br />
              <span className="text-accent">Redefined</span>
            </HeroTitle>
            <HeroSubtitle>
              Experience the future of project management with our stunning, 
              intuitive, and addictive task management platform. Built with 
              designer-level attention to detail.
            </HeroSubtitle>
            <HeroButtons>
              <button 
                className="btn btn-primary"
                onClick={() => history.push('/register')}
              >
                Get Started Free
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => history.push('/login')}
              >
                Sign In
              </button>
            </HeroButtons>
          </HeroText>
          
          <HeroVisual className={isVisible ? 'animate-scaleIn' : ''}>
            <FloatingCard>
              <CardTitle>📋 Beautiful Boards</CardTitle>
              <CardContent>Create stunning project boards with custom backgrounds and layouts</CardContent>
            </FloatingCard>
            
            <FloatingCard>
              <CardTitle>⚡ Lightning Fast</CardTitle>
              <CardContent>Experience buttery smooth animations and instant responsiveness</CardContent>
            </FloatingCard>
            
            <FloatingCard>
              <CardTitle>🎨 Designer Quality</CardTitle>
              <CardContent>Every pixel crafted with premium design principles and attention to detail</CardContent>
            </FloatingCard>
            
            <Particle />
            <Particle />
            <Particle />
            <Particle />
          </HeroVisual>
        </HeroContent>
      </HeroContainer>
      
      <FeatureGrid>
        <FeatureCard className="animate-fadeInUp">
          <FeatureIcon>🎨</FeatureIcon>
          <FeatureTitle>Premium Design</FeatureTitle>
          <FeatureDescription>
            Every component is crafted with designer-level attention to detail, 
            featuring glassmorphism effects, smooth animations, and premium aesthetics.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <FeatureIcon>🌙</FeatureIcon>
          <FeatureTitle>Addictive Dark Mode</FeatureTitle>
          <FeatureDescription>
            Experience our carefully crafted dark theme with smooth transitions, 
            perfect contrast ratios, and an interface that's easy on the eyes.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <FeatureIcon>⚡</FeatureIcon>
          <FeatureTitle>Lightning Performance</FeatureTitle>
          <FeatureDescription>
            Built for speed with optimized animations, efficient rendering, 
            and smooth 60fps interactions that make every action feel instant.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <FeatureIcon>📱</FeatureIcon>
          <FeatureTitle>Responsive Excellence</FeatureTitle>
          <FeatureDescription>
            Perfect on every device with adaptive layouts, touch-friendly interactions, 
            and mobile-first design principles.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <FeatureIcon>🎭</FeatureIcon>
          <FeatureTitle>Micro-Interactions</FeatureTitle>
          <FeatureDescription>
            Delightful micro-animations and hover effects that make every interaction 
            feel satisfying and engaging.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard className="animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <FeatureIcon>🚀</FeatureIcon>
          <FeatureTitle>Future-Ready</FeatureTitle>
          <FeatureDescription>
            Built with modern web technologies and best practices, ensuring 
            your experience stays cutting-edge and performant.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>
    </>
  );
};

export default LandingPage;
