import React, { Suspense, useEffect, useState } from "react";
import { Icon, useDevice } from "../../commons";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Highlight from "../components/Highlight";
import useRecommended, { MockData } from "../services/useRecommended";
import Carrosel from "../components/Carrosel";
import Galery from "../components/Galery";

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
        <Galery>
          <Carrosel title="Top 10" />
          <Carrosel title="Award Winners"/>
          <Carrosel title="Binge Watch"/>
        </Galery>
      </Background>
    </Suspense>
  );
};

export default Catalog;
