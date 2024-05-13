import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
    
    return (
        <div className="nav-bar">
            <div className="left-nav">
                <Link to="/">
                    <h3>Home</h3>
                </Link>
            </div>
            <h1>DailyFootball</h1>
            <div className="right-nav">
                <Link to="/login">
                    <h3>Login</h3>
                </Link>
                <Link to="/register">
                    <h3>Register</h3>
                </Link>
            </div>
        </div>
    )
}

export default NavBar