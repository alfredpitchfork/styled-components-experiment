import Image from 'next/image';
import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export default function Day5_BlurryLoading() {
  const [load, setLoad] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const keepLoading = () => {
      if (progress > 98) {
        setLoad(false);
      }
    };
    let int = setInterval(() => {
      keepLoading();

      if (load === true) {
        setProgress(progress + 1);
      } else {
        clearInterval(int);
      }
    }, 30);

    return () => clearInterval(int);
  }, [progress]);

  return (
    <>
      <GlobalStyle />
      <ImageContainer blur={`blur(${scale(progress, 0, 100, 30, 0)}px)`}>
        <Image
          src='https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80'
          layout='fill'
          objectFit='cover'
          loading='lazy'
          objectPosition='center'
        />
      </ImageContainer>

      <LoadingText textOpacity={scale(progress, 0, 100, 1, 0)}>
        {progress}%
      </LoadingText>
    </>
  );
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const GlobalStyle = createGlobalStyle`
 body{font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;}
`;

const ImageContainer = styled.div`
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  z-index: -1;
  filter: ${(props) => props.blur};
`;

const LoadingText = styled.h1`
  font-size: 50px;
  color: #fff;
  opacity: ${(props) => props.textOpacity};
`;
