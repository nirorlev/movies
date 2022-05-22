import React, { Suspense } from "react";

function index() {
  return (
    <Suspense fallback={<div>...movie</div>}>
      <div>movie</div>
    </Suspense>
  );
}

export default index;
