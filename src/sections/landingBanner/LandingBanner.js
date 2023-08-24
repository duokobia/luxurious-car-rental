import React from "react";
import { NavLink } from "react-router-dom";

function LandingBanner() {
  return (
    <section className="landingBanner container-fluid px-5">
      <card className="card landingBanner-card d-flex align-items-center justify-content-start p-5">
        <h2 className="landingBanner-card__caption mt-3">Luxurious Limo Hire</h2>
        <small className="d-flex align-items-center justify-content-center flex-column mt-3">
          <span className="d-inline-block">
            We offer professional car rental & limousine services
          </span>
          <span className="d-inline-block">in our range of high-end vehicles.</span>
        </small>
        <button className="col-1 mt-4">Open Fleet</button>
        <div className="px-1">
          <div className="row d-flex justify-content-end">
            <form className="landingBanner-form border px-3 py-2">
              <nav className="col">
                <ul className="d-flex align-items-center justify-content-center list-unstyled pt-2">
                  <li>
                    <NavLink className="landingBanner-form__button me-2">Distance</NavLink>
                  </li>
                  <li>
                    <NavLink className="landingBanner-form__button me-2">Hourly</NavLink>
                  </li>
                  <li>
                    <NavLink className="landingBanner-form__button me-2">FlatRate</NavLink>
                  </li>
                </ul>
              </nav>
              <div className="landingBanner-form__inputs">
                <div className="row d-flex align-items-center justify-content-center px-4">
                  <input
                    className="row mb-3"
                    type="text"
                    placeholder="Pick Up Address"
                    aria-label="default input example"
                  />
                  <input
                    className="row mb-3"
                    type="text"
                    placeholder="Drop Off Address"
                    aria-label="default input example"
                  />
                  <input
                    className="row mb-3"
                    type="text"
                    placeholder="One way"
                    aria-label="default input example"
                  />
                  <input
                    className="row mb-4"
                    type="text"
                    placeholder="06/04/2023"
                    aria-label="default input example"
                  />
                </div>
                <span className="landingBanner-form__cta">
                  <span className="col-4">Pick up Time</span>
                  <button className="col-4">Drop</button>
                  <button className="col-4">Drop</button>
                </span>
              </div>
              <div className="pt-4 pb-2 ps-2">
                <button className="col">Reserve Now</button>
              </div>
            </form>
          </div>
        </div>
      </card>
    </section>
  );
}

export default LandingBanner;
