import React, { useEffect, useRef, useState } from 'react';
import Carousel from '../Carousel';
import './styles.scss'

type Props = { api: any, data: string[] }

export const Galery: React.FC<Props> = ({ api, data }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entities) => {
      const [target] = entities;
      
      if(target.isIntersecting)
        setList((prev) => [...prev, '']);
    })

    if(scrollRef.current)
      observer.observe(scrollRef.current);

    return () => observer.disconnect();
  }, [])

  return (
    <div className='galery'>
      {data.map((description, idx) => <Carousel promise={api.get({ page: idx + 1 })} title={description}/>)}
      {list.map((description, idx) => <Carousel promise={api.get({ page: data.length + idx + 1 })} title={description}/>)}
      <div className='galery__guard' ref={scrollRef}>&</div>
    </div>
  );
}

export { Galery as default };