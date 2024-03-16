import s from './services.module.scss'
import {ContainerBox, HeaderBlock} from '@/components';
import clsx from 'clsx';
import Image from 'next/image';
import img_01 from '../../../assets/img/services/01.jpg'
import img_02 from '../../../assets/img/services/02.jpg'

type ServicesProps = {
  className: string
}

export const Services = ({className}: ServicesProps) => {
  return (
    <section id="services" className={clsx(className, s.services)}>
      <ContainerBox className={s.services__container}>
        <HeaderBlock label={'SERVICES'} title={'The Services for You'}/>
        <div className={s.services__items}>
          <article className={s.services__item}>
            <div className={s.services__content}>
              <div className={s.services__body}>
                <h4 className={s.services__title}>
                  <span>Rent</span> your favorite book fairly easy on <span>Lidia</span>!
                </h4>
                <div className={s.services__text}>
                  <p>
                    Viewing, rent, and organize your favorite books has
                    never been easier. An integrated digital library rent
                    that’s simple to use, Lidia lets you spend less time
                    managing your work and more time actually doing it!
                  </p>
                  <p>
                    Effortless rentals, personalized shelves—Lidia
                    transforms book management, enhancing your
                    reading experience~
                  </p>
                </div>
              </div>
            </div>
            <div className={s.services__image}>
              <Image src={img_01} alt={'Image'} className={s.services__picture}/>
            </div>
          </article>
          <article className={s.services__item}>
            <div className={s.services__content}>
              <div className={s.services__body}>
                <h4 className={s.services__title}>Quick Book
                  Rentals: <span>Dive</span> into <span>Reading</span> Instantly</h4>
                <div className={s.services__text}>
                  <p>
                    Discover instant literary delight. Access a vast library,
                    borrow your favorite reads, and dive into captivating
                    stories within minutes. Reading made quick and easy,
                    just a click away!
                  </p>
                  <p>
                    Unlock a world of stories effortlessly.
                    Browse genres, choose, rent in minutes.
                    Seamlessly manage your reading adventures
                    with our intuitive platform~
                  </p>
                </div>
              </div>
            </div>
            <div className={s.services__image}>
              <Image src={img_02} alt={'Image'} className={s.services__picture}/>
            </div>
          </article>
        </div>
      </ContainerBox>
    </section>
  );
};
