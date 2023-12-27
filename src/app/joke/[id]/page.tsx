import { Metadata } from 'next';
import { JokeItem } from '@/components/layout/joke/JokeItem';
import { db } from '@/lib/db';

//  Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  //const jokes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jokes`).then((res) => res.json());
  const jokes = await db.jokes.findMany({
    orderBy: {
      id: 'desc',
    }
  })
  return jokes.map((joke: { id: number }) => ({
    id: `${joke.id}`,
    fallback: true,
  }));
}

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const joke = await getJoke(params);
 
  return {
    title: joke.title,
    description: joke.text,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
    openGraph: {
      title: joke.title,
      description: joke.text,
      url: `${process.env.NEXT_PUBLIC_URL}`,
      siteName: 'IT Jokes',
      images: joke.image_url,
    },
  }
}

async function getJoke(params: { id: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jokes/${params.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();

  return data.joke;
}
 
export default async function Joke({ params }: Props) {
  const joke = await getJoke(params);

  return (
    <JokeItem props={joke} />
  )
}