import React, { Suspense, useEffect, useState } from "react";
import { Icon, useDevice } from "../../commons";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Highlight from "../components/Highlight";
import useRecommended from "../services/useRecommended";
import Carousel from "../components/Carousel";
import Galery from "../components/Galery";
import Modal, { ModalProvider } from "../components/Modal";

const random = (data: any[]): any => data[Math.floor(Math.random() * data.length)];

export const Catalog = () => {
  const { issm, isxs } = useDevice();
  const recommended = useRecommended();
  const [picked, setPicked] = useState<unknown>();

  useEffect(() => {
    recommended.get({ page: 1 })
      .then((data) => setPicked(random(data)))
      .catch(err => console.error(err))
  }, []);

  return (
    <Suspense fallback={<div>...catalog</div>}>
      <Background>
        <Navbar isSmall={issm} isExtraSmall={isxs} />
        <Highlight
          details={picked}
          play={<Icon icon="./assets/play.svg" />}
          more={<Icon icon="./assets/info.svg" />}
        />
        <ModalProvider>
          <Galery>
            <Carousel promise={recommended.get({ page: 1 })} title="Top 10" />
            <Carousel promise={recommended.get({ page: 2 })} title="Award Winners" />
            <Carousel promise={recommended.get({ page: 3 })} title="Binge Watch" />
          </Galery>
          <Modal />
        </ModalProvider>
      </Background>
    </Suspense>
  );
};

export { Catalog as default };
