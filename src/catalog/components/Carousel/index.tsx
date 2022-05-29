import React, { useEffect, useRef, useState } from 'react';
import Poster from '../Poster';
import './styles.scss'

type Props = { title: string, promise: Promise<any> };

const [width, padding] = [180, 8];
const offset = - width - padding;

const mod = (size: number) => (value: number) => (value + 1) % (size + 1);

export const Carrossel: React.FC<Props> = ({ title, promise }) => {
  const [counter, setCounter] = useState(-1);
  const [movies, setMovies] = useState<any[]>([]);
  const handlerRef = useRef<React.MouseEventHandler<HTMLButtonElement>>();

  useEffect(() => {
    promise
      .then(data => {
        handlerRef.current = () => setCounter(mod(data.length))
        setMovies(data);
      })
      .catch(() => console.log('Fail to render catalog'))
  }, [promise])

  const renderMovieListInEndlessSlide = () => {
    const [fst, ...rest] = movies;

    return <>
      <Poster key={"fst"} width={width} lpadding={padding} {...fst} />
      {rest.map(mv => <Poster key={mv.id} width={width} lpadding={padding} {...mv} />)}

      <Poster key={"mid"} width={width} lpadding={padding} {...fst} />
      {rest.map(mv => <Poster key={mv.id} width={width} lpadding={padding} {...mv} />)}
    </>
  };

  return (
    <div className='carrossel'>
      <span className='carrossel__title'>{title}</span>
      <div className='carrossel__videos' style={{ marginLeft: offset * (counter + 1) }}>
        {renderMovieListInEndlessSlide()}
        {handlerRef.current && <button className='carrossel__button' onClick={handlerRef.current}>
          <img alt="Next" src="/assets/chevron.svg" />
        </button>}
      </div>
    </div>
  );
}

export { Carrossel as default };