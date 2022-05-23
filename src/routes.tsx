import React from "react";
import { Route } from "react-router-dom";
import {C} from './commons';
import home from "./catalog";
import movie from "./movie";

const HomePage = home();
const MoviePage = movie();

const Routes = () => {
  return (
    <C.RootRouter element={<C.TopLevelLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/:mname" element={<MoviePage />} />
    </C.RootRouter>
  );
};

export default Routes;
