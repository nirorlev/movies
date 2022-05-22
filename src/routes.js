import React from "react";
import { Route } from "react-router-dom";
import Layout from "./commons/components/TopLevelLayout";
import Router from "./commons/components/RootRouter";
import home from "./catalog";
import movie from "./movie";

const HomePage = home();
const MoviePage = movie();

const index = () => {
  return (
    <Router element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/:mname" element={<MoviePage />} />
    </Router>
  );
};

export default index;
