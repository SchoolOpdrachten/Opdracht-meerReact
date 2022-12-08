import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Boek } from "./components/Boek"
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/boek',
    element: <Boek />
  }
];

export default AppRoutes;
