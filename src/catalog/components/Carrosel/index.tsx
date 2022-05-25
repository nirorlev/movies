import React, { useState } from 'react';
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
        <img key="fst" alt="Video" src="https://random.imagecdn.app/182/120" />
        {_.map((_, k) => <img key={k} alt="Video" src="https://random.imagecdn.app/180/120" />)}
        <img key="mid" alt="Video" src="https://random.imagecdn.app/182/120" />
        {_.map((_, k) => <img key={k} alt="Video" src="https://random.imagecdn.app/180/120" />)}
        <button className='carrossel__button' onClick={handler}>
          <img src="/assets/chevron.svg" />
        </button>
      </div>
    </div>
  );
}

export { Carrossel as default };