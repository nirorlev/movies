import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

type Props = {children: React.ReactElement[], element: React.ReactElement};

const RootRouter = ({ children, element }: Props) => {
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

export default RootRouter;
