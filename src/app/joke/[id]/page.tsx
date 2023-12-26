'use client';

import { useEffect, useState } from 'react';

type JokeParams = {
  params: { id: number | string }
}

export default function Joke({ params }: JokeParams) {
  const [joke, setJoke] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getJoke(params);
  }, []);
 
  async function getJoke(params: { id: number }) {
    try {
      const resp = await fetch(`http://localhost:3000/api/jokes/${params.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      const response = await resp.json();
      setJoke(response.joke);
      setLoading(false);
      if(response.ok) {
        return response.joke;
      } else {
        console.log('failed to load joke')
      }
    } catch(error) {
      console.log(error)
    }
  }

  console.log(joke)

  return (
    <div className="p-5 sm:p-8">
      {loading ? (
        <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
      ) : (
        <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
          <img src={joke?.image_url} />
        </div>
      )}
    </div>
  )
}
