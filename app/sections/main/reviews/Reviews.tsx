import React from 'react';

import s from './reviews.module.scss'
import clsx from 'clsx';
import {ContainerBox, HeaderBlock} from '@/components';
import img_01 from '../../../assets/img/reviews/01.jpg'
import img_02 from '../../../assets/img/reviews/02.jpg'
import img_03 from '../../../assets/img/reviews/03.jpg'
import Image from 'next/image';

type ReviewsProps = {
  className: string
}

export const Reviews = ({className}: ReviewsProps) => {
  const reviews = [
    {
      img: img_01,
      text: 'Engaging plot, vivid characters; a captivating read that lingers in your thoughts.',
      author: 'Ahmad Saugi',
      position: 'College Student'
    },
    {
      img: img_02,
      text: 'Thought-provoking narrative and rich prose. A must-read for any avid book lover!',
      author: 'Muhammad Alfian',
      position: 'School Student'
    },
    {
      img: img_03,
      text: 'Immersive storytelling! An enriching literary experience worth savoring and sharing.',
      author: 'Wahyu Amirulloh',
      position: 'ERP Developer'
    },
  ]


  return (
    <section id='reviews' className={clsx(className, s.reviews)}>
      <ContainerBox className={s.reviews__container}>
        <HeaderBlock label={'REVIEWS'} title={'Reviews of Others'} className={s.reviews__headerBlock}/>
        <div className={s.reviews__body}>
          <div className={s.reviews__items}>
            {reviews.map((item, index) => {
              return <article key={index} className={s.reviews__item}>
                <a href='#' className={s.reviews__linkAvatar}>
                  <Image src={item.img} alt="Image" className={s.reviews__avatar}/>
                </a>
                <div className={s.reviews__text}><p>{item.text}</p></div>
                <h4 className={s.reviews__title}>
                  <a className={s.reviews__linkTitle}>{item.author}</a>
                </h4>
                <div className={s.reviews__position}>{item.position}</div>
              </article>
            })}
          </div>
        </div>
      </ContainerBox>
    </section>
  );
};
