import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const TopLevelLayout = () => {
  return (
    <Suspense fallback={<div>...fame</div>}>
      <div className="layout">
        <Outlet />
      </div>
    </Suspense>
  );
};

export default TopLevelLayout;
