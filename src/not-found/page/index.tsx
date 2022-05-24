import React, { Suspense } from "react";
import { Params, useParams } from "react-router-dom";
import './styles.scss';

const map = (param: Readonly<Params<string>>) =>
  Object.values(param).map(word => word?.toUpperCase())

const NotFound = () => {
  const param = useParams();

  return (
    <Suspense fallback={<div>...not found</div>}>
      <div className="container">
        <span className="message">Sorry nothing to see here :(</span>
        <span className="message">{`"${map(param)}" page was not part of the assigment !`} </span>
      </div>
    </Suspense>
  );
};

export default NotFound;
