import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { useEffect, useState } from 'react';
import CreateUser from './pages/CreateUser';
import HomePage from './pages/HomePage';
import MyTrail from './pages/MyTrail';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/create",
      element:
        <CreateUser/>,
    },
    {
      path: "/my-trail",
      element:
        <MyTrail/>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
