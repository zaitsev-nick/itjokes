'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { JokeInDB } from '@/types/types';

export default function JokesGrid() {
  const router = useRouter();
  const [data, setData] = useState<JokeInDB[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/jokes`, { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store' ,
      next: { revalidate: 0 }
    })
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
  }, []);

  function goToJoke(id: number) {
    router.push(`${process.env.NEXT_PUBLIC_URL}/joke/${id}`)
    return;
  }

  return (
    <div className="p-5 sm:p-8">
      {loading ? (
        <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
      ) : (
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            {data && data.map((item: JokeInDB) => <img onClick={() => goToJoke(item.id)} src={item.image_url} key={item.id} className="border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:shadow-sm cursor-pointer"></img>)}
        </div>
      )}
    </div>
  )
}
