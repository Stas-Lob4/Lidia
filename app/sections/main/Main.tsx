import s from './main.module.scss'
import {Hero} from '@/sections/main/hero/Hero';
import {Features} from '@/sections/main/features/Features';
import {Services} from '@/sections/main/services/Services';
import {Reviews} from '@/sections/main/reviews/Reviews';
import {Location} from '@/sections/main/location/Location';

export const Main = () => {
  return (
    <main className={s.page}>
      <Hero className={s.page__hero}/>
      <Features className={s.page__features}/>
      <Services className={s.page__services}/>
      <Reviews className={s.page__reviews}/>
      <Location className={s.page__location}/>
    </main>
  );
};
