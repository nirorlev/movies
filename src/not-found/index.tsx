import { lazy } from "react";

const component: LazyComponent = () =>
  lazy(() => import("./page"));

export default component;
