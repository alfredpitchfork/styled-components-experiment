import styled, { createGlobalStyle } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import NavBar from '../components/nav';

export default function Day6_ScrollAnimation() {
  const dataRef = useRef([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    let dataSample = [
      { name: 'Content', show: false },
      { name: 'Content', show: false },
      { name: 'Content', show: false },
      { name: 'Content', show: false },
      { name: 'Content', show: false },
      { name: 'Content', show: false },
      { name: 'Content', show: false },
      { name: 'Content', show: false },
      { name: 'Content', show: false },
      { name: 'Content', show: false },
      { name: 'Content', show: false },
      { name: 'Content', show: false },
    ];
    setData(dataSample);
    return (dataRef.current = new Array(data.length));
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateX(0)';
            } else {
              entry.target.style.opacity = '0.5';
              entry.target.style.transform = 'translateX(-100vw)';
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px 0px 2000px',
          threshold: [0],
        }
      );
      const oi = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateX(0)';
            } else {
              entry.target.style.opacity = '0.5';
              entry.target.style.transform = 'translateX(100vw)';
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 2000px 0px 0px',
          threshold: [0],
        }
      );
      dataRef.current.forEach((box, index) => {
        if (index % 2 == 0) {
          oi.observe(box);
        } else {
          io.observe(box);
        }
      });
    }
  });

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <H1>Scroll to see the animation</H1>
      {data.map((element, index) => (
        <Box
          className='Box'
          ref={(el) => (dataRef.current[index] = el)}
          key={index}
        >
          <H2>{element.name}</H2>
        </Box>
      ))}
    </>
  );
}

const GlobalStyle = createGlobalStyle`
body {
  background-color: #efedd6;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  overflow-x: hidden;
}`;

const H2 = styled.h2`
  font-size: 45px;
`;
const H1 = styled.h1`
  margin: 10px;
`;

const Box = styled.div`
  background-color: steelblue;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);

  transition: transform 0.4s ease;
`;
