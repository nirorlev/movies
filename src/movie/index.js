import { lazy } from "react";

const component = () => lazy(() => import("./page"));

export default component;
