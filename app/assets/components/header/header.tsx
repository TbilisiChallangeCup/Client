import Image from 'next/image'
import Link from 'next/link';
import style from './style.module.css';

import icon from '../../img/icon.jpg'

// client
import Navigation from './client/Navigation'

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.wrapper} >
        <article>
          <div>
            <Image src={icon.src} width={icon.width} height={icon.height} alt='Trophy Icon Tcc Tbilisi Challange Cup Football Soccer' />
          </div>
          
          <section>
            <p>TCC</p>
            <p>ოფიციალური ტურნირის ვებგვერდი</p>
          </section>
        </article>
        <Navigation/>
      </div>
    </header>
  );
}