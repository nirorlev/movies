import React from 'react';
import { Icon } from '../../../commons';
import Poster from '../Poster';
import { useModal } from './context';
import './styles.scss';

const style = (state: any) => state.hidden ? { display: 'none' } : { display: 'block', top: state.offsetTop }

export const Modal: React.FC = () => {
  const context = useModal();

  return context.state && (
    <div
      className="modal"
      style={style(context.state)}
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

export { ModalContextProvider as ModalProvider, useModal, ActionKind } from './context';
export { Modal as default };
