import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import NavBar from '../components/nav';

export default function Day2_ProgressSteps() {
  const steps = [{ title: 1 }, { title: 2 }, { title: 3 }, { title: 4 }];
  const progressRate = 100 / (steps.length - 1);
  const [progress, setProgress] = useState(0);

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <ProgressBarContainer>
        <ProgressBackground />
        <ProgressBar stage={(progress * progressRate).toString() + '%'} />
        {steps.map(({ title }, index) => (
          <div key={title}>
            {index <= progress ? (
              <StepContainer complete>{title}</StepContainer>
            ) : (
              <StepContainer>{title}</StepContainer>
            )}
          </div>
        ))}
      </ProgressBarContainer>
      <Button
        onClick={() => {
          if (progress > 0) {
            setProgress(progress - 1);
          }
        }}
        disabled={progress === 0}
      >
        Prev
      </Button>
      <Button
        onClick={() => {
          if (progress < steps.length - 1) {
            setProgress(progress + 1);
          }
        }}
        disabled={progress === steps.length - 1}
      >
        Next
      </Button>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
body {
    background-color: #f6f7fb;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
  }
  
`;

const ProgressBar = styled.div`
  background-color: #3498db;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: ${(props) => props.stage};
  z-index: -1;
  transition: 0.4s ease;
`;

const StepContainer = styled.div`
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    props.complete ? '3px solid #3498db' : '3px solid #e0e0e0'};
  transition: 0.4s ease;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
`;

const ProgressBackground = styled.div`
  background-color: #e0e0e0;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  z-index: -2;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: 0;
  }

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;
