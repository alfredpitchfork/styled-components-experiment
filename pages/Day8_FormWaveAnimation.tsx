import { useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Day8_FormWaveAnimation: React.FunctionComponent = () => {
  const emailRef = useRef<HTMLLabelElement>(null);
  const passwordRef = useRef<HTMLLabelElement>(null);
  useEffect(() => {
    emailRef.current!.innerHTML = emailRef
      .current!.innerText.split('')
      .map(
        (letter: string, idx: number) =>
          `<span style=transition-delay:${idx * 50}ms>${letter}</span>`
      )
      .join('');
  }, []);

  useEffect(() => {
    passwordRef.current!.innerHTML = passwordRef
      .current!.innerText.split('')
      .map(
        (letter: string, idx: number) =>
          `<span style='transition-delay:${idx * 50}ms'>${letter}</span>`
      )
      .join('');
  }, []);
  return (
    <>
      <GlobalStyle />
      <Container>
        <H1>Please Login</H1>
        <form>
          <FormControl>
            <input type='text' required />
            <label ref={emailRef}>Email</label>
          </FormControl>
          <FormControl>
            <input type='password' required />
            <label ref={passwordRef}>Password</label>
          </FormControl>
          <Button>Login</Button>
          <Text>
            Don't have an account?
            <A href='#'> Register</A>
          </Text>
        </form>
      </Container>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
body{
    background-color: steelblue;
    color: #fff;
    font-family: 'Muli', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
}
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  border-radius: 5px;
`;

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const A = styled.a`
  text-decoration: none;
  color: lightblue;
`;

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  width: 100%;
  background: lightblue;
  padding: 15px;
  font-family: inherit;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  &:focus {
    outline: 0;
  }
  &:active {
    transform: scale(0.98);
  }
`;

const FormControl = styled.div`
  position: relative;
  margin: 20px 0 40px;
  width: 300px;
 
    & input {
      background-color: transparent;
      border: 0;
      border-bottom: 2px #fff solid;
      display: block;
      width: 100%;
      padding: 15px 0;
      font-size: 18px;
      color: #fff;
      &:focus,
      &:valid {
        outline: 0;
        border-bottom-color: lightblue;
        & + label span {
            color: lightblue;
            transform: translateY(-30px);
        }
      }
    }
  }
  & label {
    position: absolute;
    top: 15px;
    left: 0;
    pointer-events: none;
    & span {
      display: inline-block;
      font-size: 18px;
      min-width: 5px;
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
`;

const Text = styled.p`
  margin-top: 30px;
`;

export default Day8_FormWaveAnimation;
