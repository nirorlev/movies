import React from 'react';
import { Button, useDevice } from '../../../commons';
import './styles.scss';

type Props = { details?: any, play?: React.ReactNode, more?: React.ReactNode }

export const Highlight: React.FC<Props> = ({ details, play, more }) => {
  const { isxs } = useDevice();

  return (
    <div className='highlight'>
      {isxs && <span className='highlight__text'>netflix</span> }
      {details && details.title && <span className='highlight__title'>{details.title}</span>}
      {!isxs && details && details.overview && <span className='highlight__description'>{details.overview}</span>}
      <div className='highlight__buttons'>
        <Button text='Play' type='primary' icon={play} />
        {!isxs && <Button text='More' type='secondary' icon={more} />}
      </div>
    </div>
  );
}

export { Highlight as default };