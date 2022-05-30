import React, { memo, useCallback, useRef, useState } from 'react';
import { useModal, ModalAction } from '../Modal';
import './styles.scss';

type Props = { width?: number, lpadding?: number, readable?: boolean };

const Poster = memo<Props>(({ width, lpadding, readable, ...rest }) => {
  const details: any = rest;
  const src: string = details.backdrop_path
    ?`${process.env.REACT_APP_IMAGES_RESOURCE}${details.backdrop_path}`
    :'/assets/placeholder.png';
  const { dispatch } = useModal();
  const ref = useRef<HTMLButtonElement>(null);
  const [title, setTitle] = useState('');

  const clickHandler = useCallback(() => {
    ref.current && dispatch({ type: ModalAction.Position, payload: ref.current.offsetTop })
    dispatch({ type: ModalAction.Reveal, payload: details })
  }, [dispatch, ref, details]);

  const hoverHandler = useCallback((text: string) => () => {
    ref.current && setTitle(text);
  }, [ref])

  return (
    <button ref={ref} onClick={clickHandler}
      onMouseOver={hoverHandler(details.title)}
      onMouseOut={hoverHandler('')}
      style={{ padding: 0, paddingLeft: lpadding }}
    >
      <img alt="poster" className='details__img' width={width} src={src} />
      {title && readable && <span className='details__text' style={{ width }}>{title}</span>}
    </button>
  );
});

export default Poster;