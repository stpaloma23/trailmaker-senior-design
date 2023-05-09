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
import NavBar from './components/NavBar';
import FinancesPage from './pages/FinancesPage';
import ProfessionalPage from './pages/ProfessionalPage';
import HighSchoolPage from './pages/HighSchoolPage';
import AcademicPage from './pages/AcademicPage';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import ArticlePage from './pages/ArticlePage';


function App() {
  const [appInitialized, setAppInitialized] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});
  console.log("app",isLoggedIn);

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
  },[]);

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

  const router = createBrowserRouter(
    [
    {
      path: "/",
      element: 
        <HomePage
          app={appInitialized}
          userInformation={userInformation}
          isLoggedIn={isLoggedIn}
        />,
    },
    {
      path: "/finances",
      element: <FinancesPage/>,
    },
    {
      path: "/career",
      element: <ProfessionalPage/>,
    },
    {
      path: "/highschool",
      element: <HighSchoolPage/>,
    },
    {
      path: "/academics",
      element: <AcademicPage/>,
    },
    {
      path: "/create-user",
      element:
        <CreateUser
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
          app={appInitialized}
        />,
    },
    {
      path: "/login",
      element:
        <LoginPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
          app={appInitialized}
        />,
    },
    {
      path: "/my-trail",
      element:
        <MyTrail
          isLoggedIn={isLoggedIn}
          app={appInitialized}
          userInformation={userInformation}
        />,
    },
    {
      path: "/article/:id", 
      element: 
        <ArticlePage 
          app={appInitialized}
          userInformation={userInformation}
          isLoggedIn={isLoggedIn}
        />,
    },
  ]);
  return (
    <div className="App">
      <NavBar 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation}/>
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
