import React, { Suspense, useEffect, useState } from "react";
import { Icon, useDevice } from "../../commons";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Highlight from "../components/Highlight";
import useRecommended, { MockData } from "../services/useRecommended";
import Carousel from "../components/Carousel";
import Galery from "../components/Galery";
import Modal, { ModalProvider } from "../components/Modal";

const random = (data: MockData[]): MockData => data[Math.floor(Math.random() * data.length)];

export const Catalog = () => {
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
        <ModalProvider>
          <Galery>
            <Carousel title="Top 10" />
            <Carousel title="Award Winners" />
            <Carousel title="Binge Watch" />
          </Galery>
          <Modal />
        </ModalProvider>
      </Background>
    </Suspense>
  );
};

export { Catalog as default };
