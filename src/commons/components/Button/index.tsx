import React from 'react';
import { fallbackHandler } from '../../utils';
import './styles.scss';

type Props = { text: string, type: "primary" | "secondary", icon?: React.ReactNode };

export const Button: React.FC<Props> = ({ type, text, icon }) => {
  return (
    <button className={`btn btn-${type}`} onClick={fallbackHandler}>
      {icon}
      <span className={`text text-${type}`}>{text}</span>
    </button>
  );
}

export { Button as default };
