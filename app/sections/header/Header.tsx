import logo from '../../assets/img/logo.png'
import Image from 'next/image';

import s from './header.module.scss'
import clsx from 'clsx';

export const Header = () => {
  const menuList = [{href: '#features',title:'Feature'},{href: '#services',title:'Service'},{href: '#reviews',title:'Review'},{href: '#location',title:'Location'}]

  return (
    <header id="header" className={s.header}>
      <div className={s.header__container}>
        <a href={'#header'} className={s.header__logo}>
          <Image width={78} height={28} src={logo} alt={'Logo'}/>
        </a>
        <nav className={clsx(s.header__menu, s.menu)}>
          <ul className={s.menu__list}>
            {menuList.map((item, index)=>{
              return <li key={index} className={s.menu__item}>
                <a href={item.href} className={s.menu__link}>{item.title}</a>
              </li>
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
