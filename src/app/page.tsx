import type { Metadata } from 'next';
import JokesGrid from '@/components/home/JokesGrid';

export const metadata: Metadata = {
  title: 'IT Jokes',
  description: 'Free to upload and share IT jokes and fave fun',
}

export default function HomePage() {

  return (
    <>
      <JokesGrid />
    </>
  )
}
