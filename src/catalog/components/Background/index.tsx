import React from 'react';
import './styles.scss';

type Props = { children?: React.ReactElement | React.ReactElement[] }

export const Background: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg">
      <img alt="Play now" className="bg__image" src="https://random.imagecdn.app/720/480" />
      <div className="bg__content">
        {children}
      </div>
    </div>
  );
}

export { Background as default };