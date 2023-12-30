'use client';

import { useEffect, useState } from 'react';
import JokesGridDesktop from '@/components/home/JokesGridDesktop';
import JokesGridMobile from '@/components/home/JokesGridMobile';

export default function JokesGrid() {
  const [screenWidth, setScreenWidth] = useState<number>();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const isDesktop = screenWidth && screenWidth > 765;

  return (
    <>
      {isDesktop ? <JokesGridDesktop /> : <JokesGridMobile />}
    </>
  )

}
