import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Day7_SplitLandingPage() {
  const contentLeft = {
    Title: 'XBox Series X',
    ImageSrc: 'https://testicularbucket.s3.us-east-2.amazonaws.com/xbox.jpg',
  };
  const contentRight = {
    Title: 'Playstation 5',
    ImageSrc: 'https://testicularbucket.s3.us-east-2.amazonaws.com/ps.jpg',
  };

  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Container>
        <Split
          left
          onMouseEnter={() => setLeftActive(true)}
          onMouseLeave={() => setLeftActive(false)}
          hover={leftActive ? 'active' : rightActive ? 'passive' : null}
        >
          <Image src={contentLeft.ImageSrc} layout='fill' objectFit='cover' />
          <H1>{contentLeft.Title}</H1>
          <Link href='./' passHref>
            <BTN>Buy Now</BTN>
          </Link>
        </Split>
        <Split
          onMouseEnter={() => setRightActive(true)}
          onMouseLeave={() => setRightActive(false)}
          hover={rightActive ? 'active' : leftActive ? 'passive' : null}
        >
          <Image src={contentRight.ImageSrc} layout='fill' objectFit='cover' />
          <H1>{contentRight.Title}</H1>
          <Link href='./' passHref>
            <BTN left>Buy Now</BTN>
          </Link>
        </Split>
      </Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
body{
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    overflow: hidden;
    margin: 0;
}
`;

const H1 = styled.h1`
  font-size: 4rem;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 2;
`;

const BTN = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
  text-decoration: none;
  color: #fff;
  border: #fff solid 0.2rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  width: 15rem;
  padding: 1.5rem;
  z-index: 2;
  &:hover {
    background-color: ${(props) =>
      props.left ? 'rgba(87, 84, 236, 1)' : 'rgba(28, 122, 28, 1)'};
    border-color: ${(props) =>
      props.left ? 'rgba(87, 84, 236, 1)' : 'rgba(28, 122, 28, 1)'};
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #333;
  display: flex;
  flex-direction: row;
`;

const handleWidth = (hover) => {
  switch (hover) {
    case 'active':
      return '75%';
    case 'passive':
      return '25%';
    default:
      return '50%';
  }
};
const handleLeft = (hover) => {
  switch (hover) {
    case 'active':
      return '25%';
    case 'passive':
      return '75%';
    default:
      return '50%';
  }
};

const Split = styled.div`
  position: absolute;
  width: ${({ hover }) => handleWidth(hover)};
  height: 100%;
  overflow: hidden;
  transition: all 1000ms ease-in-out;
  left: ${(props) => (props.left ? ({ hover }) => handleLeft(hover) : 0)};

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.left ? 'rgba(43, 43, 43, 0.8)' : 'rgba(87, 84, 236, 0.7)'};

    z-index: 1;
  }
`;
