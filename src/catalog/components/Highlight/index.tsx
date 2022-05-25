import React from 'react';
import { Button, useDevice } from '../../../commons';
import { MockData } from '../../../mocks';
import './styles.scss';

type Props = { info?: MockData, play?: React.ReactNode, more?: React.ReactNode }

export const Highlight: React.FC<Props> = ({ info, play, more }) => {
  const { isxs } = useDevice();

  return (
    <div className='highlight'>
      {isxs && <span className='highlight__text'>netflix</span> }
      {info && info.title && <span className='highlight__title'>{info.title}</span>}
      {!isxs && info && info.overview && <span className='highlight__description'>{info.overview}</span>}
      <div className='highlight__buttons'>
        <Button text='Play' type='primary' icon={play} />
        {!isxs && <Button text='More' type='secondary' icon={more} />}
      </div>
    </div>
  );
}

export { Highlight as default };