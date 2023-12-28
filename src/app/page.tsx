import JokesGrid from '@/components/home/JokesGrid';

// do not cache this page
export const revalidate = 0;

export default function HomePage() {

  return (
    <>
      <JokesGrid />
    </>
  )
}
