import React, { Suspense } from "react";
import { E } from "../../commons";
import Navbar from "../components/Navbar";

const Catalog = () => {
  const { isPortable } = E.useDevice();

  return (
    <Suspense fallback={<div>...catalog</div>}>
      <Navbar isPortable={isPortable}/>
      <div>catalog</div>
    </Suspense>
  );
};

export default Catalog;
