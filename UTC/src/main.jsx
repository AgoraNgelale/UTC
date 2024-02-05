import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Stores from './pages/Stores.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Chipotle from './pages/Chipotle.jsx';
import ChickFilA from './pages/ChickFilA.jsx';
import InNOut from './pages/InNOut.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "stores",
    element: <Stores/>,
  },
  {
    path: "chipotle",
    element: <Chipotle/>,
  },
  {
    path: "chick-fil-a",
    element: <ChickFilA/>,
  },
  {
    path: "in-n-out",
    element: <InNOut/> ,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
