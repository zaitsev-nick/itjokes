import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

import LayoutMain from '@/components/layout/LayoutMain';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IT Jokes',
  description: 'Free to upload and share IT jokes and fave fun',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>
      <LayoutMain>
        {children}
      </LayoutMain>
      </body>
    </html>
  )
}
