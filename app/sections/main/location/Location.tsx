import React from 'react';
import clsx from 'clsx';

import s from './location.module.scss'
import {ContainerBox, HeaderBlock} from '@/components';

type LocationProps =  {
  className: string
}
export const Location = ({className}: LocationProps) => {
  return (
    <section id='location' className={clsx(className, s.location)}>
      <ContainerBox className={s.location__container}>
        <HeaderBlock label={'LOCATION'} title={'Our Library Location'}/>
        <iframe className={s.location__map}
                src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126682.29347657792!2d-34.8815975!3d-7.14660885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace839019aa3d7%3A0x6e414a9c6d26db34!2sJo%C3%A3o%20Pessoa%2C%20State%20of%20Para%C3%ADba%2C%20Brazil!5e0!3m2!1sen!2sua!4v1708618651521!5m2!1sen!2sua'}
                width={'600'}
                height="450"
                style={{border: 0}}
                loading="lazy"
                allowFullScreen
                referrerPolicy={'no-referrer-when-downgrade'}
        ></iframe>
      </ContainerBox>
    </section>
  );
};
