import clsx from 'clsx';

import s from './header-block.module.scss'

type HeaderBlockProps = {
  className?: string
  label: string
  title: string
}
export const HeaderBlock = ({className, label, title}: HeaderBlockProps) => {
  return (
    <div className={clsx(className, s.headerBlock, s.headerBlockMargin)}>
      <div className={s.headerBlock__label}>{label}</div>
      <h2 className={s.headerBlock__title}>{title}</h2>
    </div>
  );
};
