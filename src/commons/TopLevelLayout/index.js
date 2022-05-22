import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <Suspense fallback={<div>...fame</div>}>
      <div>frame</div>
      <Outlet />
    </Suspense>
  );
};

export default index;
