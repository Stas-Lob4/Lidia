import React from 'react';
import img_01 from '../../../assets/img/features/01.svg'
import img_02 from '../../../assets/img/features/02.svg'
import img_03 from '../../../assets/img/features/03.svg'

import s from './features.module.scss'
import clsx from 'clsx';
import {HeaderBlock} from '@/components';
import Image from 'next/image';

type FeaturesProps = {
  className: string
}
export const Features = ({className}: FeaturesProps) => {
  const featuresItems = [
    {
      img: img_01,
      title: 'Search book',
      text: 'Effortlessly find your next read with our powerful and intuitive book search.'
    },
    {
      img: img_02,
      title: 'Review book',
      text: 'Discover insightful critiques and share your thoughts on diverse literary masterpieces effortlessly.'
    },
    {
      img: img_03,
      title: 'Wishlist book',
      text: 'ECurate your literary dreams–wishlist books for future adventures and discoveries.'
    }
  ]

  return (
    <section id="features" className={clsx(className, s.features)}>
      <div className={s.features__container}>
        <HeaderBlock label={'FEATURES'} title={'What You Can Do?'}/>
        <div className={s.features__items}>
          {featuresItems.map((item, index) => {
            return <div className={s.features__item} key={index}>
              <div className={s.features__icon}>
                <Image src={item.img} alt={'Image'}/>
              </div>
              <h4 className={s.features__title}>{item.title}</h4>
              <div className={s.features__text}>
                <p>{item.text}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  );
};
