'use client';

import styles from './Header.module.scss';
import Link from 'next/link';
import cx from 'classnames';
import { fetcher } from '@/lib/swr';
import useSWR from 'swr';

export function Header() {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/joke/latest`, fetcher);
  const lastRecordID = data?.id;

  const randomID = Math.floor(Math.random() * (lastRecordID - 21)) + 21;

  return (
    <header className={cx(styles.header, 'bg-black text-gray-100 shadow w-full')}>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link href='/' className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
          <span className='ml-3 text-xl'>&lt;IT Jokes /&#62;</span>
        </Link> 
        <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
        <Link href='/upload' className='relative'>
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
          <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">Add a joke</span>
        </Link>
        <Link href={`/joke/${randomID}`} className='relative ml-6'>
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
          <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-yellow-200 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">Random 🎲</span>
        </Link>
        </nav>
      </div>
    </header>
  )
}