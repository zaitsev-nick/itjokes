'use client';

import ShareButtons from '@/components/share/ShareButtons';
import { JokeInDB } from '@/types/types';


export function JokeItem({ props }: { props: JokeInDB }) {
  const { image_url, title, id } = props;

  return (
    <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
      <img src={image_url} />
      <ShareButtons props={{
          shareUrl: `${process.env.NEXT_PUBLIC_URL}/joke/${id}`,
          title: title || 'IT Joke',
          image: image_url,
        }} />
    </div>
  )
}