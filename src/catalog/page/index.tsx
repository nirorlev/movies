import React, { Suspense } from "react";
import Navbar from "../components/Navbar";

const Catalog = () => {
  return (
    <Suspense fallback={<div>...catalog</div>}>
      <Navbar />
      <div>catalog</div>
    </Suspense>
  );
};

export default Catalog;
