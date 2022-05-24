import React from 'react';
import './styles.scss';

type Props = { children?: React.ReactElement }

function Background({ children }: Props) {
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