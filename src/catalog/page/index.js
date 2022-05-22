import React, { Suspense } from "react";

function index() {
  return (
    <Suspense fallback={<div>...catalog</div>}>
      <div>catalog</div>
    </Suspense>
  );
}

export default index;
