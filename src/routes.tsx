import React from "react";
import { Route } from "react-router-dom";
import { RootRouter, TopLevelLayout } from './commons';
import home from "./catalog";
import nfound from "./not-found";

const HomePage = home();
const NotFound = nfound();

const Routes = () => {
  return (
    <RootRouter element={<TopLevelLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </RootRouter>
  );
};

export default Routes;
