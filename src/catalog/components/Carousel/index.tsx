import React, { useState } from 'react';
import Poster from '../Poster';
import './styles.scss'

type Props = { title: string };

const C_SIZE = 10;
const OFFSET_I = -188;

const _ = Array.from({ length: C_SIZE });
const mod = (value: number) => (value + 1) % (C_SIZE + 1);

export const Carrossel: React.FC<Props> = ({ title }) => {
  const [counter, setCounter] = useState(-1);
  const handler = () => setCounter(mod);

  return (
    <div className='carrossel'>
      <span className='carrossel__title'>{title}</span>
      <div className='carrossel__videos' style={{ marginLeft: OFFSET_I * (counter + 1) }}>
        <Poster key={"fst"} />
        {_.map((_, k) => <Poster key={k} />)}
        <Poster key={"mid"} />
        {_.map((_, k) => <Poster key={k} />)}
        <button className='carrossel__button' onClick={handler}>
          <img src="/assets/chevron.svg" />
        </button>
      </div>
    </div>
  );
}

export { Carrossel as default };