import React from "react";
import { NavLink } from "react-router-dom";

function LandingBanner() {
  return (
    <section className="landingBanner container-fluid px-5">
      {/* <div className="row"> */}
      <card className="card landingBanner-card d-flex align-items-center justify-content-center col p-5">
        <h2>Luxurious Limo Hire</h2>
        <p className="row d-flex align-items-center justify-content-center">
          <span>We offer professional car rental & limousine services</span>
          <span>in our range of high-end vehicles.</span>
        </p>
        <button className="col-1 my-4">Open Fleet</button>
        <div className="d-flex align-items-center justify-content-end">
          <form className="landingBanner-form border px-3 py-2">
            <nav className="col">
              <ul className="d-flex align-items-center justify-content-center list-unstyled pt-2">
                <li>
                  <NavLink className="landingBanner-form__button me-2">Distance</NavLink>
                </li>
                <li>
                  <span>Hourly</span>
                </li>
                <li>
                  <span>Flat Rate</span>
                </li>
              </ul>
            </nav>
            <div className="landingBanner-form__inputs">
              <div className="row d-flex align-items-center justify-content-center px-4">
                <input className="row mb-2" />
                <input className="row mb-2" />
                <input className="row mb-2" />
                <input className="row mb-4" />
              </div>
            </div>
            <div className="landingBanner-form__cta">
              <span className="pe-3">Pick up Time</span>
              <button className="me-2">Drop</button>
              <button className="me-2">Drop</button>
              <button>Reserve Now</button>
            </div>
          </form>
        </div>
      </card>
      {/* </div> */}
    </section>
  );
}

export default LandingBanner;
