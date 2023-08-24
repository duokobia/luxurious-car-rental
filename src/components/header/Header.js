/* eslint-disable no-return-assign */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PiDotsNineBold } from "react-icons/pi";

function Header() {
  return (
    <header className="appHeader container-fluid">
      <div className="row px-3 py-3">
        <h1 className="col-3">
          <Link to="/" className="text-decoration-none">
            LuxRentals
          </Link>
        </h1>
        <nav className="col-4">
          <ul className="d-flex align-items-center justify-content-between list-unstyled ps-3">
            <li>
              <NavLink to="/" className="text-decoration-none" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/vehicles" className="text-decoration-none" exact>
                Vehicles
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="text-decoration-none" exact>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className="text-decoration-none" exact>
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="col-5 ps-5">
          <button className="col-3 offset-3 me-5">
            <Link to="/" className="text-decoration-none">
              Dropdown btn
            </Link>
          </button>
          <span>
            <PiDotsNineBold className="fs-1 fw-bold" />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
