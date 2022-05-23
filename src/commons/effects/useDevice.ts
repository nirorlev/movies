import { useEffect, useState } from "react";

const useDevice = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handler = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return {
    isxs: width <= 480,
    issm: width > 480 && width <= 768,
    ismd: width > 768 && width <= 1080,
    islg: width > 1080,
  };
};

export default useDevice;
