import React, { Suspense, useEffect, useState } from "react";
import { Icon, useDevice } from "../../commons";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Highlight from "../components/Highlight";
import useRecommended, { MockData } from "../services/useRecommended";

const random = (data: MockData[]): MockData => data[Math.floor(Math.random() * data.length)];

const Catalog = () => {
  const { issm, isxs } = useDevice();
  const recommended = useRecommended();
  const [picked, setPicked] = useState<MockData>();

  useEffect(() => {
    recommended.get()
      .then((data) => setPicked(random(data)))
      .catch(err => console.error(err))
  }, []);

  return (
    <Suspense fallback={<div>...catalog</div>}>
      <Background>
          <Navbar isSmall={issm} isExtraSmall={isxs} />
          <Highlight
            info={picked}
            play={<Icon icon="./assets/play.svg" />}
            more={<Icon icon="./assets/info.svg" />}
          />
      </Background>
      <div>catalog</div>
    </Suspense>
  );
};

export default Catalog;
