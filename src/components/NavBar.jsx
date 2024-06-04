import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function NavBar() {
  const { user, logout } = useContext(AuthContext);

  // Check if user exists and has a username property before accessing it
  if (!user || !user.username) {
    // Handle the case where user is null, undefined, or does not have a username
    return (
      <div className="nav-bar">
        <div className="left-nav">
          <h3>Login to continue</h3>
          <Link to="/">
            <h3>Home</h3>
          </Link>
        </div>
        <div className="title">
          <h1>DailyFootball</h1>
        </div>
        <div className="right-nav">
          <Link to="/login">
            <h3>Login</h3>
          </Link>
          <Link to="/register">
            <h3>Register</h3>
          </Link>
        </div>
      </div>
    );
  }

  // Render the navigation bar when user exists and has a username
  return (
    <div className="nav-bar">
      <div className="left-nav">
        {user.username === 'admin' ? (
          <Link to="/create-post">
            <h3>Create Post</h3>
          </Link>
        ):<h3 className="hello">Hello {user.username}</h3>}
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </div>

      <div className="title">
        <h1>DailyFootball</h1>
      </div>
      <div className="right-nav">
        
        <span onClick={logout} style={{ cursor: "pointer" }}>
          <h3>Logout</h3>
        </span>
        <Link to="/register">
            <h3>Register</h3>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;