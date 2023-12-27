import { Metadata } from 'next';
import { JokeItem } from '@/components/layout/joke/JokeItem';

//  Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  const jokes = await fetch('http://localhost:3000/api/jokes').then((res) => res.json());
 
  return jokes.map((joke: { id: number }) => ({
    id: `${joke.id}`,
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
    metadataBase: new URL('https://itjokes.art'),
    openGraph: {
      title: joke.title,
      description: joke.text,
      url: 'https://itjokes.art',
      siteName: 'IT Jokes',
      images: joke.image_url,
    },
  }
}

async function getJoke(params: { id: string }) {
  const response = await fetch(`http://localhost:3000/api/jokes/${params.id}`, {
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