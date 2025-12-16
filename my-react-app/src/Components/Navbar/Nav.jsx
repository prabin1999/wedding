import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/weds-bg - Edited.png"
import "../../assets/Style/Nav.css";

const Nav = ({ user, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm py-2">
      <div className="container py-3">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Company Logo" className="company-logo" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto gap-3 align-items-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>
                HOME
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown" >
                WEDDING
              </span>
        
            </li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                BLOG     </span>
            </li>

           
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"  >
              FAQ
              </span>
            </li>

         
            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link">
                CONTACT
              </NavLink>
            </li>
          </ul>

          {!user ? (
            <div className="d-flex gap-2">
              <NavLink to="/login">
                <button className="btn btn-outline-primary px-4">Login</button>
              </NavLink>
              <NavLink to="/sign">
                <button className="btn btn-primary px-4">Sign Up</button>
              </NavLink>
            </div>
          ) : (
            <div className="d-flex gap-2">
              <NavLink to="/dashboard">
                <button className="btn btn-outline-primary px-4">
                  Dashboard
                </button>
              </NavLink>
              <NavLink to="/profile">
                <button className="btn btn-outline-secondary px-4">
                  Profile
                </button>
              </NavLink>
              <button className="btn btn-danger px-4" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
