'use client';
import Image from 'next/image';

import { Carousel } from '@/app/components/Carousel';
import { DATA } from './constants';

import { Celebration } from '@/app/components/Celebration';

export default function Page() {
  return (
    <>
      <Carousel data={DATA} />
      <Celebration />
    </>
  );
}
