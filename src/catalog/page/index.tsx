import React, { Suspense } from "react";
import { E } from "../../commons";
import Navbar from "../components/Navbar";

const Catalog = () => {
  const { issm, isxs } = E.useDevice();

  return (
    <Suspense fallback={<div>...catalog</div>}>
      <Navbar isSmall={issm} isExtraSmall={isxs} />
      <div>catalog</div>
    </Suspense>
  );
};

export default Catalog;
