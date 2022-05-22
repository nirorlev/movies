import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Frame from "./components/Frame";
import home from './catalog';
import movie from './movie';

const HomePage = home();
const MoviePage = movie();

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
