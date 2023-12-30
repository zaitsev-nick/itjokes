 

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { JokeInDB } from '@/types/types';
import useSWR from 'swr';
import { fetcher } from '@/lib/swr';

const PAGE_SIZE = 20;

export default function JokesGridDesktop() {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState(1);

  const { data, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/jokes?page=${pageIndex}&per_page=${PAGE_SIZE}`, fetcher);

  function goToJoke(id: number) {
    router.push(`${process.env.NEXT_PUBLIC_URL}/joke/${id}`);
    return;
  }

  const jokes = data || [];
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
console.log(isReachingEnd)
  const spinner = 
    <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
    </div>
  ;

  const prevPage = 
  <a href="#"  className="relative">
    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
    <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-6 py-2 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500 ">◀&nbsp;&nbsp; Previous</span>
  </a>
  ;

  const nextPage = 
    <a href="#"  className="relative">
      <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
      <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-6 py-2 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">Next &nbsp;&nbsp;▶</span>
    </a>
  ;

  return (
    <div className="p-5 sm:p-8">
      {isEmpty ? <p>Yay, no jokes found.</p> : null}
      {isLoading ? spinner : 
        <>
          <div className="columns-1 gap-5 sm:gap-8 md:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-8">
            {jokes && jokes.map((item: JokeInDB) => <img onClick={() => goToJoke(item.id)} src={item.image_url} key={item.id} className="border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:shadow-sm cursor-pointer"></img>)}
          </div>
          <div className='m-6 flex place-content-between'>
            {pageIndex > 1 ? <button onClick={() => setPageIndex(pageIndex - 1)} className='flex'>
              {prevPage}
            </button> : null}
            <button 
              disabled={isReachingEnd}
              onClick={() => setPageIndex(pageIndex + 1)} className='flex'>
              {nextPage}
            </button>
          </div>
        </>
      }
    </div>
  )
}
