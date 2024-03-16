import React, {ReactNode} from 'react';

import s from './container-box.module.scss'
import clsx from 'clsx';

type ContainerBoxPros = {
  className?: string
  children: ReactNode
}

export const ContainerBox = ({className, children}: ContainerBoxPros) => {
  return (
    <div className={clsx(className, s.container)}>
      {children}
    </div>
  );
};

