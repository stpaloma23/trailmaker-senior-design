import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged} from "firebase/auth";

import CreateUser from './pages/CreateUser';
import HomePage from './pages/HomePage';
import MyTrail from './pages/MyTrail';


function App() {
  const [appInitialized, setAppInitialized] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});

  const firebaseConfig = {
    apiKey: "AIzaSyBwDdMlQxYeM0ZnbE9X9SOYfaNLAMWckbo",
    authDomain: "senior-design-trailmaker.firebaseapp.com",
    projectId: "senior-design-trailmaker",
    storageBucket: "senior-design-trailmaker.appspot.com",
    messagingSenderId: "519671469065",
    appId: "1:519671469065:web:94d3fc54ec607580b114d8",
    measurementId: "G-20194W2QKG"
  };

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    setAppInitialized(app)
  },[])

  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserInformation(user);
          setIsLoggedIn(true);
        } else {
          setUserInformation({});
          setIsLoggedIn(false);
        }
        setIsLoading(false);
      });
    }
  }, [appInitialized]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/create-user",
      element:
        <CreateUser
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
        />,
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
