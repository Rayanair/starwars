import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Personnage from './page/Personnage';
import DetailVaisseau from './page/DetailVaisseau';
import DetailPerso from './page/DetailPersonnage';


const router = createBrowserRouter([
  {
    element: <Personnage/>,
    path: "/"
  },
  {
    element: <DetailPerso/>,
    path: "/DetailPerso"
  },
  {
    element: <DetailVaisseau/>,
    path: "DetailVaisseau"
  },

]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
