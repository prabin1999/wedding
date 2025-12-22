import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/weds-mar.png";
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
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto gap-3 align-items-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/wedding" className="nav-link">
                WEDDING
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                BLOG
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/faqqq" className="nav-link">
                FAQ
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                CONTACT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/host" className="nav-link">
                BECOME A HOST
              </NavLink>
            </li>
          </ul>

          {!user ? (
            <div className="d-flex gap-2">
              <NavLink
                to="/login"
                className="btn btn-outline-primary px-4 auth-btn animate__animated animate__bounce" > 
                Login
              </NavLink>

              <NavLink to="/sign" className="btn btn-primary px-4 auth-btn animate__animated animate__bounce">
                Sign Up
              </NavLink>
            </div>
          ) : (
            <div className="d-flex gap-2">
              <NavLink to="/dashboard" className="btn btn-outline-primary px-4">
                Dashboard
              </NavLink>
              <NavLink to="/profile" className="btn btn-outline-secondary px-4">
                Profile
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
