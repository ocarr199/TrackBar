import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import MainFeed from '../MainFeed/MainFeed';
import CreatePost from '../CreatePost/CreatePost';
import Profile from '../Profile/Profile';
import Following from '../Following/Following'
import EditPost from '../EditPost/EditPost'
import Comments from '../Comments/Comments'
import './App.css';

// get code for spotify api
const code = new URLSearchParams(window.location.search).get('code')

function App() {

  console.log(code)

  const dispatch = useDispatch();
useEffect(() => {
 
})
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LoginPage at /login
            exact
            path="/login"
            authRedirect="/user"
          >
            <LoginPage />
          </ProtectedRoute>

          <ProtectedRoute

            exact
            path="/registration"
            authRedirect="/user"
          >
            <RegisterPage />
          </ProtectedRoute>

          <ProtectedRoute
 
            exact
            path="/home"
            authRedirect="/user"
          >
            <LandingPage />
          </ProtectedRoute>
          <ProtectedRoute

            exact
            path="/feed"
    
          >
            <MainFeed />
          </ProtectedRoute>
          <ProtectedRoute
    
            exact
            path="/create"
    
          >
            <CreatePost code={code} />
          </ProtectedRoute>
          <ProtectedRoute

            exact
            path="/profile/:id"
    
          >
            <Profile />
          </ProtectedRoute>
          <ProtectedRoute
 
            exact
            path="/following"
    
          >
            <Following />
          </ProtectedRoute>
          <ProtectedRoute
  
            exact
            path="/edit/:id"
    
          >
            <EditPost />
          </ProtectedRoute>
           <ProtectedRoute
     
            exact
            path="/comments/:id"
    
          >
            <Comments />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
          
            <h1>404</h1>
          </Route>
        </Switch>
        {/* <Footer /> */}
        
      </div>
    </Router>
  );
}

export default App;
