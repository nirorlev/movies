import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import './styles.scss'

export const TopLevelLayout = () => {
  return (
    <Suspense fallback={<div>...fame</div>}>
      <div className="layout">
        <Outlet />
      </div>
    </Suspense>
  );
};

export { TopLevelLayout as default };
