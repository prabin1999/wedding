import React from 'react'
import logo from '../../assets/Images/weds-bg.png'
import "../../assets/Style/Nav.css"
import { Link } from 'react-router-dom'


const Nav = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-white sticky-top py-2 shadow-sm">
            <div className="container py-4">
                <div className="navbar-brand">
                    <img src={logo} alt="company logo" className="company-logo" />
                </div>

                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                    aria-controls="navMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navMenu">
                    <ul className="navbar-nav mx-auto gap-3">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/wedding">Wedding</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/costumes">Costumes</Link>
                        </li>
                    </ul>


                    <div className="d-flex gap-4 buttons">
                        <Link to="/contactus">
                            <button type="button" className="btn px-4">Contact Us</button>
                        </Link>

                        <Link to="/booknow">
                            <button type="button" className="btn px-4">Book Now</button>
                        </Link>

                    </div>

                </div>
            </div>
        </nav>

    )
}

export default Nav
