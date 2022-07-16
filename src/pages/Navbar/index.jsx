/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom';
import herderImages from "../../assets/images/logo.png";


const Navbar = () => {
  return (
    <div className="position-sticky top-0" style={{ zIndex: 999 }}>
      <div className="text-center bg-light">
        <img
          src={herderImages}
          className="img-fluid header-image"
          alt="headerImages"
        />
      </div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse flex-grow-0 slide m-auto" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/entry-rules" className="nav-link">
                  Entry Rules
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/entry-form" className="nav-link">
                  Entry Form
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/payment" className="nav-link">
                  Payment
                </Link>
              </li>
              <li className="nav-item">
                <Link to="status" className="nav-link">
                  Status
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/results" className="nav-link">
                  Results
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/archive" className="nav-link">
                  Archive
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
