import React, { useState } from 'react';
import { Icon, useDevice } from '../../../commons';
import { useModal } from './context';
import './styles.scss';

const style = (state: any) => state.hidden ? { display: 'none' } : { display: 'block', top: state.offsetTop - 150 }
const getbackdrop = (data: any) => `${process.env.REACT_APP_IMAGES_RESOURCE}${data.backdrop_path}`;
const getposter = (data: any) => `${process.env.REACT_APP_IMAGES_RESOURCE}${data.poster_path}`;

export const Modal: React.FC = () => {
  const context = useModal();
  const [loaded, setLoaded] = useState(false);
  const { issm, isxs } = useDevice();

  return context.state && (
    <div
      className="modal"
      style={style(context.state)}
    >
      {context.state.data && (
        <>
          <img
            alt="poster"
            className='modal__image'
            src={(issm || isxs)? getposter(context.state.data): getbackdrop(context.state.data)}
            onLoad={() => setLoaded(true)}
          />
          {loaded && <div className="modal__details">
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
          </div>}
        </>
      )}
    </div>
  );
}

export { ModalContextProvider as ModalProvider, useModal, ActionKind } from './context';
export { Modal as default };
