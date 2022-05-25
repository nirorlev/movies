import React from 'react';
import './styles.scss'

type Props = { children?: React.ReactElement | React.ReactElement[] }

export const Galery: React.FC<Props> = ({ children }) => {
  return (
    <div className='galery'>
      {children}
    </div>
  );
}

export { Galery as default };