import React, { useCallback } from 'react';
import { Button, useDevice } from '../../../commons';
import { useSort, SortAction } from './context';
import './styles.scss';

type Props = { details?: any, play?: React.ReactNode, more?: React.ReactNode }

export const Highlight: React.FC<Props> = ({ details, play, more }) => {
  const { isxs } = useDevice();
  const { dispatch } = useSort();
  const changeHandler = useCallback((event: React.ChangeEvent<HTMLSelectElement>) =>
    event.target && dispatch({ type: (event.target.value as SortAction) }), [dispatch]);

  return (
    <div className='highlight'>
      {isxs && <span className='highlight__text'>netflix</span>}
      {details && details.title && <span className='highlight__title'>{details.title}</span>}
      {!isxs && details && details.overview && <span className='highlight__description'>{details.overview}</span>}
      <div className='highlight__actions'>
        <div className='highlight__buttons'>
          <Button text='Play' type='primary' icon={play} />
          {!isxs && <Button text='More' type='secondary' icon={more} />}
        </div>
        <div className='highlight__dropdown'>
          <select defaultValue={SortAction.Trending} onChange={changeHandler}>
            <option value={SortAction.Trending}>{SortAction.Trending}</option>
            <option value={SortAction.Votes}>{SortAction.Votes}</option>
            <option value={SortAction.Az}>{SortAction.Az}</option>
            <option value={SortAction.New}>{SortAction.New}</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export { SortContextProvider as SortProvider, useSort, SortAction } from './context';
export { Highlight as default };
