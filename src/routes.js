import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Frame from "./pages/components/Frame";

const HomePage = lazy(() => import("./pages/Catalog"));
const MoviePage = lazy(() => import("./pages/Movie"));

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route index element={<HomePage />} />
          <Route path="/:mname" element={<MoviePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default index;
