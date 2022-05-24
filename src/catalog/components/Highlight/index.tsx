import React from 'react';
import { Button } from '../../../commons';
import './styles.scss';

type Props = { play?: React.ReactNode, info?: React.ReactNode }

export const Highlight: React.FC<Props> = ({ play, info }) => {
  return (
    <div className='highlight'>
      <div className='highlight__buttons'>
        <Button text='Play' type='primary' icon={play} />
        <Button text='More' type='secondary' icon={info} />
      </div>
    </div>
  );
}

export { Highlight as default };