//import ShareButtonsFooter from '@/components/share/ShareButtonsFooter';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';
import styles from './Footer.module.scss';

export function Footer() {

  return (
    <footer className='bg-white text-gray-900 border-2 border-t-gray-900 w-full' >
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center font-bold justify-between'>
        <Link href='/' className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
          <span className='ml-3 text-xl'>&lt;IT Jokes /&#62;</span>
        </Link> 
        <div className={cx(styles.footer)}>
          <a href='https://t.me/It_jokes_official_bot'>
          <Image
            src="tg.svg"
            width={40}
            height={40}
            alt="Telegram bot"
          />
          Telegram bot
          </a>
        </div>
      </div>
    </footer>
  )
}