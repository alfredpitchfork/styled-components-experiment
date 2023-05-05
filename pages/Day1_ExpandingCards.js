import styled, { createGlobalStyle } from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import NavBar from '../components/nav';

const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Muli', sans-serif;
  display: flex;
  justify-content: center;
  align-items:center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}


`;

const ImgDiv = styled.div`
  height: 80vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: ${(props) => (props.status ? 5 : 0.5)};
  margin: 10px;
  position: relative;
  -webkit-transition: all 700ms ease-in;
  transition: all 700ms ease-in;
  overflow: hidden;
  cursor: default;
`;

const ContainerDiv = styled.div`
  display: flex;
  width: 90vw;
`;

const ImgTitles = styled.h1`
  z-index: 2;
  font-size: 2rem;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: ${(props) => (props.status ? 1 : 0)};

  transition: opacity 0.3s ease-in 0.4s;
`;

export default function Day1_ExpandingCards() {
  const [select, setSelect] = useState(4);

  const image_array = [
    {
      image: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691',
      title: 'Explore the World',
    },
    {
      image: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d',
      title: 'Wild Forest',
    },
    {
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      title: 'Sunny Beach',
    },
    {
      image: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9',
      title: 'City on Winter',
    },
    {
      image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b',
      title: 'Mountains - Clouds',
    },
  ];

  let active = true;
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <ContainerDiv>
        {image_array.map(({ image, title }, index) => (
          <>
            {index === select ? (active = true) : (active = false)}
            <ImgDiv
              status={active}
              key={image}
              onClick={() => setSelect(index)}
            >
              <Image src={image} layout='fill' objectFit='cover' />
              <ImgTitles status={active}>{title}</ImgTitles>
            </ImgDiv>
          </>
        ))}
      </ContainerDiv>
    </>
  );
}
