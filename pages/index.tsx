import Link from 'next/link';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const PlainList = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: -30px;
`;

export default function Home() {
  return (
    <div>
      <h1> welcome!</h1>
      <PlainList>
        <ListItem>
          <Link href='./Day1_ExpandingCards'>Day 1 - Expanding Cards</Link>
        </ListItem>
        <ListItem>
          <Link href='./Day2_ProgressSteps'>Day 2 - Progress Steps</Link>
        </ListItem>
        <ListItem>
          <Link href='./Day3_RotatingNavigation'>
            Day 3 - Rotating Navigation
          </Link>
        </ListItem>
        <ListItem>
          <Link href='./Day4_HiddenSearchWidget'>
            Day 4 - Hidden Search Widget
          </Link>
        </ListItem>
        <ListItem>
          <Link href='./Day5_BlurryLoading'>Day 5 - Blurry Loading</Link>
        </ListItem>
        <ListItem>
          <Link href='./Day6_ScrollAnimation'>Day 6 - Scroll Animation</Link>
        </ListItem>
        <ListItem>
          <Link href='./Day7_SplitLandingPage'>Day 7 - Split Landing Page</Link>
        </ListItem>
        <ListItem>
          <Link href='./Day8_FormWaveAnimation'>
            Day 8 - Form Wave Animation
          </Link>
        </ListItem>
      </PlainList>
    </div>
  );
}
