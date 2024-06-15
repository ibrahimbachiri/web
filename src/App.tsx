import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Desktop1 from './pages/Desktop1';
import Desktop2 from './pages/Desktop2';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Huspedes from './pages/Huspedes';
import Llegada from './pages/Llegada';
import Salida from './pages/Salida';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Desktop1', element: <Desktop1 /> },
{ path: '/Desktop2', element: <Desktop2 /> },
{ path: '/Destination', element: <Destination /> },
{ path: '/Home', element: <Home /> },
{ path: '/Huspedes', element: <Huspedes /> },
{ path: '/Llegada', element: <Llegada /> },
{ path: '/Salida', element: <Salida /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}