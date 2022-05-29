import React, { useCallback, useRef } from 'react';
import { useModal, ActionKind } from '../Modal';

const Poster = () => {
  const { dispatch } = useModal();
  const ref = useRef<HTMLButtonElement>(null);
  const handler = useCallback(() => {
    ref.current && dispatch({ type: ActionKind.Position, payload: ref.current.offsetTop})
  }, [dispatch, ref])

  return (
    <button ref={ref} onClick={handler}>
      <img alt="poster" src="https://random.imagecdn.app/182/120" />
    </button>
  );
}

export default Poster;