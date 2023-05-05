import styled, { createGlobalStyle } from 'styled-components';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

export default function Day3_RotatingNavigation() {
  const content = {
    ImageSrc:
      'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    ImageAlt: 'doggy',
    Title: 'Amazing Article',
    Title2: 'My Dog',
    Author: 'Popping Flow',
    Text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.',
  };
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Head>
        <script
          src='https://kit.fontawesome.com/51e0a028c5.js'
          crossOrigin='anonymous'
        ></script>
      </Head>
      <Container showNav={showNav}>
        <CircleContainer>
          <Circle showNav={showNav}>
            <CircleButton close onClick={() => setShowNav(!showNav)}>
              <i className='fas fa-times'></i>
            </CircleButton>
            <CircleButton open onClick={() => setShowNav(!showNav)}>
              <i className='fas fa-bars'></i>
            </CircleButton>
          </Circle>
        </CircleContainer>

        <Content>
          <h1>{content.Title}</h1>
          <small>{content.Author}</small>
          <p>{content.Text}</p>

          <h3>{content.Title2}</h3>
          <ImageContainer>
            <Image
              src={content.ImageSrc}
              alt={content.ImageAlt}
              layout='fill'
              objectFit='cover'
            />
          </ImageContainer>
          <p>{content.Text}</p>
        </Content>
      </Container>
      <Nav>
        <ul>
          <ListItem showNav={showNav}>
            <Link href='./' passHref>
              <a>
                <Icon className='fas fa-home' /> Home
              </a>
            </Link>
          </ListItem>
          <ListItem showNav={showNav}>
            <Icon className='fas fa-user-alt'></Icon> About
          </ListItem>
          <ListItem showNav={showNav}>
            <Icon className='fas fa-envelope'></Icon>Contact
          </ListItem>
        </ul>
      </Nav>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
Body{
 font-family: 'Lato', sans-serif;
  background-color: #333;
  color: #222;
  overflow-x: hidden;
  margin: 0;}
`;

const Container = styled.div`
  position: relative;
  background-color: #fafafa;
  transform-origin: top left;
  transition: transform 0.5s linear;
  width: 100vw;
  min-height: 100vh;
  padding: 50px;
  transform: ${(props) => (props.showNav ? 'rotate(-20deg)' : null)};
`;

const CircleContainer = styled.div`
  position: fixed;
  top: -100px;
  left: -100px;
`;

const Circle = styled.div`
  background-color: #ff7979;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;
  transform: ${(props) => (props.showNav ? 'rotate(-70deg)' : null)};
`;

const CircleButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: ${(props) => (props.close ? '60%' : '50%')};
  left: ${(props) => (props.open ? '60%' : '50%')};
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;
  transform: ${(props) => (props.close ? 'rotate(90deg)' : null)};
  transform-origin: ${(props) => (props.close ? 'top left' : null)};
  &:focus {
    outline: none;
  }
`;

const ListItem = styled.li`
  text-transform: uppercase;

  color: #fff;
  margin: 40px 0;
  transform: ${(props) =>
    props.showNav ? 'translateX(0)' : 'translateX(-100%)'};
  transition-delay: ${(props) => (props.showNav ? '0.3s' : null)};
  transition: transform 0.4 ease-in;
  a {
    text-decoration: none;
    color: #fff;
  }

  & + & {
    margin-left: 15px;
    transform: ${(props) =>
      props.showNav ? 'translateX(0)' : 'translateX(-150%)'};
  }
  & + & + & {
    margin-left: 30px;
    transform: ${(props) =>
      props.showNav ? 'translateX(0)' : 'translateX(-200%)'};
  }
`;

const Icon = styled.i`
  font-size: 20px;
  margin-right: 10px;
`;

const Nav = styled.nav`
  position: fixed;
  bottom: 40px;
  left: 0;
  z-index: 100;

  ul {
    list-style-type: none;
    padding: 30px;
  }
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 50px auto;

  h1 {
    margin: 0;
  }
  small {
    color: #555;
    font-style: italic;
  }

  p {
    color: #333;
    line-height: 1.5;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  width: 50vw;
  height: 50vh;
`;
