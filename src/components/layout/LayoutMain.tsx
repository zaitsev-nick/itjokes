import type { PropsWithChildren } from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import styles from './LayoutMain.module.scss';
import cx from 'classnames';


export default function LayoutMain({ children }:
  PropsWithChildren<unknown>) {
  return (
    <>
      <Header />
      <main className={cx(styles.layout, 'w-full m-auto')}>
        <div>{children}</div>
      </main>
      <Footer />
    </>
  )
}