import { lazy } from "react";

export const component: LazyComponent = () =>
  lazy(() => import("./page"));

export { component as default };
