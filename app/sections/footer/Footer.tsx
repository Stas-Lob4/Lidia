import React from 'react';

import s from './footer.module.scss'
import {ContainerBox} from '@/components';
import Image from 'next/image';
import logo from '../../assets/img/logo.png'
import img_twitter from '../../assets/img/social/twitter.svg'
import img_instagram from '../../assets/img/social/insta.svg'
import img_facebook from '../../assets/img/social/facebook.svg'
import clsx from 'clsx';

export const Footer = () => {
  const socials = [img_twitter, img_instagram, img_facebook]

  return (
    <footer className={s.footer}>
      <div className={s.footer__body}>
        <ContainerBox className={s.footer__container}>
          <div className={s.footer__item}>
            <h4 className={s.footer__title}>Maneged By</h4>
            <Image src={logo} alt={'Image'} className={s.footer__logo}/>
          </div>
          <div className={s.footer__item}>
            <h4 className={s.footer__title}>Social Media</h4>
            <div className={clsx(s.footer__social, s.social)}>
              {socials.map((item, index) => {
                return <a href={'#'} key={index} className={s.social__item}>
                  <Image src={item} alt={'Image'}/>
                </a>
              })}
            </div>
          </div>
          <div className={s.footer__item}>
            <h4 className={s.footer__title}>Slogan</h4>
            <a href={'#'} className={s.footer__link}>#RentFavBooks</a>
          </div>
        </ContainerBox>
      </div>
      <div className={s.footer__copy}>© 2024 Lidia. All rights reserved.</div>
    </footer>
  );
};
