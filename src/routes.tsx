import React from "react";
import { Route } from "react-router-dom";
import { C } from './commons';
import home from "./catalog";
import movie from "./movie";
import nfound from "./not-found";

const HomePage = home();
const MoviePage = movie();
const NotFound = nfound();

const Routes = () => {
  return (
    <C.RootRouter element={<C.TopLevelLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/movie/:name" element={<MoviePage />} />
      <Route path="*" element={<NotFound />} />
    </C.RootRouter>
  );
};

export default Routes;
