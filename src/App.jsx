import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from './pages/Home/Home';
import Cities from './pages/Cities/Cities'

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import LayoutMain from "./pages/Layout/LayoutMain";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain/>,
    children: [{
    path: '/',
      element: <Home />
    },
    {
      path: '/cities',
      element: <Cities />
    }]
  }
])

function App() {
  
  return (
    <RouterProvider router={router} />
  )  
    
}

export default App;