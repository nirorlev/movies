import React, { useState } from 'react';
import { Icon } from '../../../commons';
import { useModal } from './context';
import './styles.scss';

const style = (state: any) => state.hidden ? { display: 'none' } : { display: 'block', top: state.offsetTop }

export const Modal: React.FC = () => {
  const context = useModal();
  const [loaded, setLoaded] = useState(false);

  return (context.state && loaded)? (
    <div
      className="modal"
      style={style(context.state)}
    >
      {context.state.data && (
        <>
          <img
            alt="poster"
            src={`${process.env.REACT_APP_IMAGES_RESOURCE}${context.state.data.backdrop_path}`}
            onLoad={() => setLoaded(true)}
          />
          <div className="modal__details">
            <div className='modal__icon'>
              <Icon icon="/assets/play.svg" />
              <Icon icon="/assets/like.svg" />
              <Icon icon="/assets/check.svg" />
            </div>
            <div className='modal__rates text'>
              <div>
                <span>votes</span><span>{context.state.data.vote_count}</span>
              </div>
              <div>
                <span>rate</span><span>{context.state.data.vote_average}</span>
              </div>
              <div>
                <span>popularity</span><span>{context.state.data.popularity}</span>
              </div>
            </div>
            <div className='modal__title'>
              <span>{context.state.data.title}</span>
            </div>
          </div>
        </>
      )}
    </div>
  ): null;
}

export { ModalContextProvider as ModalProvider, useModal, ActionKind } from './context';
export { Modal as default };
