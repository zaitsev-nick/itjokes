import ShareButtonsFooter from '@/components/share/ShareButtonsFooter';
import Link from 'next/link';

export function Footer() {

  return (
    <footer className='bg-white text-gray-900 border-2 border-t-gray-900 w-full' >
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center font-bold justify-between'>
        <Link href='/' className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
          <span className='ml-3 text-xl'>&lt;IT Jokes /&#62;</span>
        </Link> 
        <div><ShareButtonsFooter /></div>
      </div>
    </footer>
  )
}