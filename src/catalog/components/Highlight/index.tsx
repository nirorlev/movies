import React from 'react';
import { C } from '../../../commons';
import './styles.scss';

const Highlight: React.FC<any> = () => {
  return (
    <div className='highlight'>
      <div className='highlight__buttons'>
        <C.Button text='Play' type='primary' />
        <C.Button text='More' type='secondary' />
      </div>
    </div>
  );
}

export default Highlight;