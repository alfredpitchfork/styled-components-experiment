import Link from 'next/link';
import styled from 'styled-components';

const FancyBar = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  position: fixed;
  top: 0;
  left: 10%;
  margin-bottom: 20px;
  transform: translateX(-50%);
  width: 20vw;
  height: 8vh;
  background: #91bbd5;
  color: black;
  border-bottom: 2px solid #fff;
  justify-content: center;
  align-items: center;
`;

export default function NavBar() {
  return (
    <FancyBar>
      <Link href='./'>Go back home!</Link>
    </FancyBar>
  );
}
