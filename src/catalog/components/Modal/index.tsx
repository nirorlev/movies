import React from 'react';
import { Icon } from '../../../commons';
import Poster from '../Poster';
import './styles.scss';

type Props = { hidden: boolean, offsetTop: number };

const Modal: React.FC<Props> = ({ hidden, offsetTop }) => {
  return (
    <div
      className="modal"
      style={hidden ? { display: 'none' } : { display: 'block', top: offsetTop }}
    >
      <Poster />
      <div className="modal__details">
        <div className='modal__icon'>
          <Icon icon="/assets/play.svg" />
          <Icon icon="/assets/like.svg" />
          <Icon icon="/assets/check.svg" />
        </div>
        <div className='modal__rates text'>
          <div>
            <span>votes</span><span>1883</span>
          </div>
          <div>
            <span>rate</span><span>9.2</span>
          </div>
          <div>
            <span>views</span><span>13.816</span>
          </div>
        </div>
        <div className='modal__title'>
          <span>Title</span>
        </div>
      </div>
    </div>
  );
}

export default Modal;