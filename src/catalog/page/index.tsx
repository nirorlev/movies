import React, { Suspense } from "react";
import { useDevice } from "../../commons";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Highlight from "../components/Highlight";

const Catalog = () => {
  const { issm, isxs } = useDevice();

  return (
    <Suspense fallback={<div>...catalog</div>}>
      <Background>
        <>
          <Navbar isSmall={issm} isExtraSmall={isxs} />
          <Highlight />
        </>
      </Background>
      <div>catalog</div>
    </Suspense>
  );
};

export default Catalog;
