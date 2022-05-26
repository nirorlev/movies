import React from 'react';
import { Icon } from '../../../commons';
import Poster from '../Poster';
import './styles.scss';

type Props = { hidden: boolean };

const Modal: React.FC<Props> = ({ hidden }) => {
  return (
    <div className="modal" style={hidden ? { display: 'none' } : { display: 'block' }}>
      <Poster />
      <div className="modal__details">
        <div className='modal__icon'>
          <Icon icon="/assets/play.svg" />
          <Icon icon="/assets/play.svg" />
          <Icon icon="/assets/play.svg" />
        </div>
        <div className='modal__rates text'>
          <span>votes 1883</span>
          <span>rate 9.2</span>
          <span>views 13.816</span>
        </div>
        <div className='modal__title text'>
          <span>Title QWKERN ldahjsr ldqjhw\</span>
        </div>
      </div>
    </div>
  );
}

export default Modal;