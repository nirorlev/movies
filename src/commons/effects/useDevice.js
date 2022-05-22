import { useEffect, useState } from 'react';

const useDevice = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handler = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return { isPortable: width <= 768 };
};

export default useDevice;
