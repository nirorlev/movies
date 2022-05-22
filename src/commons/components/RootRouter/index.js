import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const index = ({ children, element }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={element}>
          {children}
        </Route>
      </Routes>
    </Router>
  );
};

export default index;
