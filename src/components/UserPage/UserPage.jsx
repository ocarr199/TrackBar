import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import useAuth from '../useAuth/useAuth'
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=d4956c6d21884362801895a3c9a69d67&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <a href={AUTH_URL}className="btn">Log In With Spotify </a>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
