import { createGlobalStyle } from 'styled-components';
import NavBar from '../components/nav';
import styled from 'styled-components';
import { useState } from 'react';
import Head from 'next/head';

export default function Day4_HiddenSearchWidget() {
  const [active, setActive] = useState(false);
  return (
    <>
      <Head>
        <script
          src='https://kit.fontawesome.com/51e0a028c5.js'
          crossOrigin='anonymous'
        ></script>
      </Head>
      <GlobalStyle />
      <NavBar />
      <Container>
        <StyledInput type='text' placeholder='Search...' active={active} />
        <StyledButton active={active} onClick={() => setActive(!active)}>
          <i className='fas fa-search'></i>
        </StyledButton>
      </Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
body{
    background-image: linear-gradient(90deg, #7d5fff, #7158e2);
    font-family: 'Robotto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
}
`;

const Container = styled.div`
  position: relative;
  height: 50px;
`;

const StyledInput = styled.input`
  background-color: #fff;
  border: 0;
  font-size: 18px;
  padding: 15px;
  height: 50px;
  width: ${(props) => (props.active ? '200px' : '50px')};
  transition: width 0.3s ease;
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  background-color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.active ? 'translateX(198px)' : null)};
  &:focus {
    outline: none;
  }
`;
