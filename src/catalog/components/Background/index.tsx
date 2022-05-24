import React from 'react';
import './styles.scss';

type Props = { children?: React.ReactElement[] }

const Background: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg">
      <img className="bg__image" src="https://random.imagecdn.app/720/480" />
      <div className="bg__content">
        {children}
      </div>
    </div>
  );
}

export default Background;