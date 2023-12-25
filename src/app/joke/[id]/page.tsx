'use client';

import { useEffect } from 'react';

export default function Joke({ params }: { params: { id: number |  string  } }) {
  let joke = {};

  useEffect(() => {
    joke = getJoke(params)
  }, []);
 
  const getJoke = async (params: { id: number }) => {
    try {
      const response = await fetch(`http://localhost:3000/api/jokes/${params.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(response => response.json());

      if(response.ok) {
        return response.joke;
      } else {
        console.log('failed to load joke')
      }
    } catch(error) {
      console.log(error)
    }
  }

  return <div>My Post: {joke.title}</div>
}

/*
export async function generateStaticParams() {
  console.log("->RUN 1");
  const posts = await fetch('http://localhost:3000/api/jokes').then((res) => res.json())
  return posts.map((post) => ({
   id: post.id.toString()
  }))
} */