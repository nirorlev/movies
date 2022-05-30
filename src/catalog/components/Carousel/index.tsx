import React, { useEffect, useRef, useState } from 'react';
import { useDevice } from '../../../commons';
import { useSort } from '../Highlight';
import Poster from '../Poster';
import './styles.scss'

type Props = { title: string, promise: Promise<any> };
type Proportions = { readable: boolean, width: number, lpadding: number };

const mod = (size: number) => (value: number) => (value + 1) % (size + 1);

const offset = (counter: number, proportions: Proportions) =>
  ({ marginLeft: -(proportions.width + proportions.lpadding) * (counter + 1) })

export const Carrossel: React.FC<Props> = ({ title, promise }) => {
  const [counter, setCounter] = useState(-1);
  const [movies, setMovies] = useState<any[]>([]);
  const handlerRef = useRef<React.MouseEventHandler<HTMLButtonElement>>();
  const [proportions, setProportions] = useState<Proportions>();
  const { isxs } = useDevice();
  const sort = useSort();

  useEffect(() => {
    promise
      .then(data => {
        handlerRef.current = () => setCounter(mod(data.length))
        setMovies(sort.state.method(data));
      })
      .catch(() => console.log('Fail to render catalog'))
  }, [promise, sort.state])

  useEffect(() => {
    if (isxs) {
      setProportions({ width: 90, lpadding: 16, readable: false });
    }
    else {
      setProportions({ width: 180, lpadding: 8, readable: true });
    }
  }, [isxs])

  const renderMovieListInEndlessSlide = () => {
    return <>
      {movies.map(mv => <Poster key={mv.id} {...proportions} {...mv} />)}
      {movies.map(mv => <Poster key={mv.id} {...proportions} {...mv} />)}
    </>
  };

  return (
    <div className='carrossel'>
      <span className='carrossel__title'>{title}</span>
      {proportions && <div className='carrossel__videos' style={offset(counter, proportions)}>
        {renderMovieListInEndlessSlide()}
        {handlerRef.current && <button className='carrossel__button' onClick={handlerRef.current}>
          <img alt="Next" src="/assets/chevron.svg" />
        </button>}
      </div>}
    </div>
  );
}

export { Carrossel as default };