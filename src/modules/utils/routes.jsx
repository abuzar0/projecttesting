import { lazy } from "react";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));

const routes = [
  { dest: "/", page: Home },
  { dest: "/about", name: "About", page: About },
];

export default routes;
