import React from 'react';
import './styles.scss';

type Props = { image?: string | any, children?: React.ReactElement | React.ReactElement[] }

export const Background: React.FC<Props> = ({ image, children }) => {
  const src = `${process.env.REACT_APP_IMAGES_RESOURCE}${image}` || "https://random.imagecdn.app/720/480";

  return (
    <div className="bg">
      <img alt="Play now" className="bg__image" src={src} />
      <div className="bg__content">
        {children}
      </div>
    </div>
  );
}

export { Background as default };