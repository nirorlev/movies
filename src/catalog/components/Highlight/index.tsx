import React from 'react';
import { Button } from '../../../commons';
import './styles.scss';

export const Highlight: React.FC<any> = () => {
  return (
    <div className='highlight'>
      <div className='highlight__buttons'>
        <Button text='Play' type='primary' />
        <Button text='More' type='secondary' />
      </div>
    </div>
  );
}

export { Highlight as default };