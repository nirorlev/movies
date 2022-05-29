import React, { useState } from 'react';
import Poster from '../Poster';
import './styles.scss'

type Props = { title: string, promise: Promise<any> };

const C_SIZE = 10;
const OFFSET_I = -188;

const _ = Array.from({ length: C_SIZE });
const mod = (value: number) => (value + 1) % (C_SIZE + 1);
const key = () => Math.random();

export const Carrossel: React.FC<Props> = ({ title, promise }) => {
  const [counter, setCounter] = useState(-1);
  const handler = () => setCounter(mod);
  const [movies, setMovies] = useState([]);

  const renderList = () => {
    return <>
      <Poster key={"fst"} />
      {_.map(() => <Poster key={key()} />)}
    </>
  };

  return (
    <div className='carrossel'>
      <span className='carrossel__title'>{title}</span>
      <div className='carrossel__videos' style={{ marginLeft: OFFSET_I * (counter + 1) }}>
        {renderList()}
        {renderList()}
        <button className='carrossel__button' onClick={handler}>
          <img alt="Next" src="/assets/chevron.svg" />
        </button>
      </div>
    </div>
  );
}

export { Carrossel as default };