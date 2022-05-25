import React from 'react';
import { Button } from '../../../commons';
import { MockData } from '../../../mocks';
import './styles.scss';

type Props = { info?: MockData, play?: React.ReactNode, more?: React.ReactNode }

export const Highlight: React.FC<Props> = ({ info, play, more }) => {
  return (
    <div className='highlight'>
      {info && info.title && <span className='highlight__title'>{info.title}</span>}
      {info && info.overview && <span className='highlight__description'>{info.overview}</span>}
      <div className='highlight__buttons'>
        <Button text='Play' type='primary' icon={play} />
        <Button text='More' type='secondary' icon={more} />
      </div>
    </div>
  );
}

export { Highlight as default };