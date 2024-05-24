import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function NavBar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="nav-bar">
      <div className="left-nav">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/create-post">
          <h3>Create Post</h3>
        </Link>
      </div>
      <div className="title">
        <h1>DailyF</h1>
        <div className="ball"></div>
        <div className="ball"></div>
        <h1>tball</h1>
      </div>
      <div className="right-nav">
        {user ? (
          <>
            <span onClick={logout} style={{ cursor: "pointer" }}>
              <h3>Logout</h3>
            </span>
          </>
        ) : (
          <>
            <Link to="/login">
              <h3>Login</h3>
            </Link>
            <Link to="/register">
              <h3>Register</h3>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;