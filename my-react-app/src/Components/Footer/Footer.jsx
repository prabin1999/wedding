import React from 'react'
import logo from '../../assets/Images/weds-bg.png'
import "../../assets/Style/Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left py-5">
                    <div className="row">
                        <div className="col-md-3 mt-md-0 mt-3">
                            <img src={logo} alt="" className='company-logo' />
                            <p>Experience real Indian weddings and cultural <br />
                                celebrations as a valued guest. Dress, dance, <br />
                                and enjoy every moment with us.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h6 className="text-uppercase">Site Map</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/" className="footer-link">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" className="footer-link">About</Link>
                                </li>
                                <li>
                                    <Link to="/wedding" className="footer-link">Wedding</Link>
                                </li>
                                <li>
                                    <Link to="/gallery" className="footer-link">Gallery</Link>
                                </li>
                                <li>
                                    <Link to="/costumes" className="footer-link">Costumes</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h6 className="text-uppercase">Contact</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="mailto:pureweds@gmail.com" className="footer-link">pureweds@gmail.com</a>
                                </li>
                                <li>
                                    <Link to="/terms" className="footer-link">Terms of Services</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h6 className="text-uppercase">Legal</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/terms" className="footer-link">Terms of Services</Link>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>

                <div className="text-center py-5 copyright justify-content-center">
                    <p className='text-center'> 
                        &copy; 2025 PureWeds. All Rights Reserved.
                        <Link to="/privacy" className="footer-link"> Privacy Policy</Link>
                    </p>
                </div>


            </footer>


        </div>
    )
}

export default Footer

