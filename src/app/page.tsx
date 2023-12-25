
'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/api/jokes')
    .then((res) => res.json())
    .then((data) => setData(data))
  }, []);

  return (
    <div className="p-5 sm:p-8">
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            {data && data.map((item) => <img src={item.image_url} key={item.id}></img>)}
        </div>
    </div>
  )
}
