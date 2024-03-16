import React from 'react';
import clsx from 'clsx';
import image_01 from '../../../assets/img/hero/01.jpg'
import image_02 from '../../../assets/img/hero/02.jpg'
import image_03 from '../../../assets/img/hero/03.jpg'
import image_04 from '../../../assets/img/hero/04.jpg'

import s from './hero.module.scss'
import Image from 'next/image';
import {ContainerBox} from '@/components';

type HeroProps = {
  className: string
}

export const Hero = ({className}: HeroProps) => {
  const images = [
    {photo: image_01, style: s.imagesHero__image__01},
    {photo: image_02, style: s.imagesHero__image__02},
    {photo: image_03, style: s.imagesHero__image__03},
    {photo: image_04, style: s.imagesHero__image__04}
  ]

  return (
    <section className={clsx(s.hero, className)}>
      <ContainerBox className={s.hero__container}>
        <div className={clsx(s.hero__content, s.contentHero)}>
          <h1 className={s.content__title}>Search & review your <a href="#">fav book</a> effortlessly</h1>
          <div className={s.contentHero__text}>
            <p>
              Embark on a literary journey like never before with our revolutionary library application! Introducing a
              seamless experience that transcends traditional boundaries, where you can effortlessly search your
              favorite books.✨
            </p>
          </div>
          <a href={'#'} className={s.contentHero__button}>Start now →</a>
        </div>
        <div className={clsx(s.hero__images, s.imagesHero)}>
          {images.map((item, index) => {
            return <a key={index} href={'#'} className={clsx(s.imagesHero__item, item.style)}>
              <Image src={item.photo} objectFit={'contain'} alt={'Image'} className={s.imagesHero__image}/>
            </a>
          })}
        </div>
      </ContainerBox>
    </section>
  );
};
