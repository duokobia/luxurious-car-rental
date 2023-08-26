/* eslint-disable no-return-assign */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PiDotsNineBold } from "react-icons/pi";

function Header() {
  return (
    <header className="appHeader container-fluid">
      <div className="row px-3 py-3">
        <h1 className="col-3">
          <Link to="/" className="appHeader-logo text-decoration-none text-dark">
            Lux<span className="appHeader-logo__green">R</span>entals
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
        <div className="appHeader-dropdownCol col-2 offset-3 ps-5">
          <select className="form-select col-2 offset-3 me-2" aria-label="Default select example">
            <option selected>
              <span>
                <PiDotsNineBold className="fs-4 fw-bold" />
                ENG
              </span>
              {/* <img src="" alt=""> */}
            </option>
            <option value="1">FR</option>
            <option value="2">DUT</option>
            <option value="3">GER</option>
          </select>
          <span>
            <PiDotsNineBold className="appHeader-icon fw-bold" />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
