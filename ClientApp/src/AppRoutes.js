import { Boek } from "./components/Boek"
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  }, 
  {
    path: '/boek',
    element: <Boek />
  }
];

export default AppRoutes;
