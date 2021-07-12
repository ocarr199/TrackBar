import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Connect Spotify';
  }

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">TrackBar</h2>
      </Link>
      <div>
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>
        <Link className="navLink" to="/feed">
          Feed
        </Link>
        <Link className="navLink" to="/create">
          Create
        </Link>
        <Link className="navLink" to={`/profile/${user.id}`}>
          Profile
        </Link>
          <Link className="navLink" to={`/following`}>
          Following
        </Link>
        {user.id && (
          <>
            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}
            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
    
    
      </div>
    </div>
  );
}

export default Nav;
