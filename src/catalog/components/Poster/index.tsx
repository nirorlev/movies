import React, { memo, useCallback, useRef, useState } from 'react';
import { useModal, ActionKind } from '../Modal';
import './styles.scss';

type Props = { width: number, lpadding: number, rest: object };

const Poster = memo<Props>(({ width, lpadding, ...rest }) => {
  const details: any = rest;
  const { dispatch } = useModal();
  const ref = useRef<HTMLButtonElement>(null);
  const [title, setTitle] = useState('');

  const clickHandler = useCallback(() => {
    ref.current && dispatch({ type: ActionKind.Position, payload: ref.current.offsetTop })
    dispatch({ type: ActionKind.Reveal, payload: details })
  }, [dispatch, ref]);

  const hoverHandler = useCallback((text: string) => () => {
    ref.current && setTitle(text);
  }, [ref])

  return (
    <button ref={ref} onClick={clickHandler}
      onMouseOver={hoverHandler(details.title)}
      onMouseOut={hoverHandler('')}
      style={{ padding: 0, paddingLeft: lpadding }}
    >
      <img alt="poster" width={width} src={`${process.env.REACT_APP_IMAGES_RESOURCE}${details.backdrop_path}`} />
      {title && <span className='details__text' style={{ width }}>{title}</span>}
    </button>
  );
});

export default Poster;