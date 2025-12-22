import React from "react";
import logo from "../../assets/Images/weds-bg.png";
import "../../assets/Style/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* <footer className="page-footer font-small pt-4 footer">
        <div className="container-fluid text-center text-md-start py-5">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <img src={logo} alt="PureWeds Logo" className="company-logo" />
              <p>
                Experience real Indian weddings and cultural <br />
                celebrations as a valued guest. Dress, dance, <br />
                and enjoy every moment with us.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-2 mb-md-0 mb-3">
              <h6 className="text-uppercase">Site Map</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/wedding" className="footer-link">
                    Wedding
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="footer-link">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/costumes" className="footer-link">
                    Costumes
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
              <h6 className="text-uppercase">Contact</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="mailto:pureweds@gmail.com" className="footer-link">
                    pureweds@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
              <h6 className="text-uppercase">Legal</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/privacy-policy" className="footer-link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="footer-link">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center py-4 copyright">
          <p className="mb-0 text-center">
            &copy; {new Date().getFullYear()} PureWeds. All Rights Reserved.
          </p>
        </div>
      </footer> */}

      <footer className="text-center text-lg-start footer">
        <section className="social-bar">
          <div className="container d-flex justify-content-center justify-content-lg-between align-items-center py-4">
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </section>

        <section className="footer-content">
          <div className="container text-md-start mt-5 ">
            <div className="row">
              <div className="col-md-4 col-lg-4 col-xl-3 mb-4">
                <h6 className="footer-title">PureWeds</h6>
                <p>
                  Experience real Indian weddings and cultural celebrations as a
                  valued guest.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mb-4 me-5">
                <h6 className="footer-title">Services</h6>
                <p>
                  <Link to="/wedding" className="footer-link">
                    Weddings
                  </Link>
                </p>
                <p>
                  <Link to="/gallery" className="footer-link">
                    Gallery
                  </Link>
                </p>
                <p>
                  <Link to="/costumes" className="footer-link">
                    Costumes
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-2 col-xl-2 mb-4 me-5">
                <h6 className="footer-title">Useful Links</h6>
                <p>
                  <Link to="/about" className="footer-link">
                    About
                  </Link>
                </p>
                <p>
                  <Link to="/privacy-policy" className="footer-link">
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link to="/terms" className="footer-link">
                    Terms
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mb-md-0 mb-4 me-5">
                <h6 className="footer-title">Contact</h6>
                <p>
                  <i className="fas fa-envelope me-3"></i> pureweds@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +91 98765 43210
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3 copyright">
          © {new Date().getFullYear()} PureWeds. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
