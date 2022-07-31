import { Home ,SearchTool} from "../screens";

const routes = [
  {
    path: "/",
    component: Home,
    secure: false,
    exact: true,
  },
  {
    path: "/search-tools",
    component: SearchTool,
    secure: false,
    exact: true,
  },
];

export default routes;
