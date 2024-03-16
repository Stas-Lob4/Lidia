import Image from 'next/image';

import styles from './page.module.css';
import {Header} from '@/sections/header/Header';
import {Main} from '@/sections/main/Main';
import {Footer} from '@/sections/footer/Footer';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
