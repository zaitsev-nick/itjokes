import JokesGrid from '@/components/home/JokesGrid';

export const dynamic = 'force-static';
export const dynamicParams = true;
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default function HomePage() {

  return (
    <>
      <JokesGrid />
    </>
  )
}
