import React from "react";
import { NavLink } from "react-router-dom";

function LandingBanner() {
  return (
    <section className="landingBanner container-fluid px-4">
      <card className="card landingBanner-card d-flex align-items-center justify-content-start p-5">
        <h2 className="landingBanner-card__caption mt-3">Luxurious Limo Hire</h2>
        <p className="landingBanner-card__parag d-flex align-items-center justify-content-center flex-column mt-3">
          <span className="d-inline-block">
            We offer professional car rental & limousine services
          </span>
          <span className="d-inline-block">in our range of high-end vehicles.</span>
        </p>
        <button className="col-2 mt-4 py-2 fs-6">Open Fleet</button>
        <div className="px-1">
          <div className="row d-flex justify-content-end">
            <form className="landingBanner-form border px-3 py-2">
              <nav className="col">
                <ul className="d-flex align-items-center justify-content-center list-unstyled pt-2">
                  <li>
                    <NavLink className="landingBanner-form__button landingBanner-form__buttonA active me-1">
                      Distance
                    </NavLink>
                  </li>
                  <span className="landingBanner-form__divider me-1">|</span>
                  <li>
                    <NavLink className="landingBanner-form__button me-1">Hourly</NavLink>
                  </li>
                  <span className="landingBanner-form__divider me-1">|</span>
                  <li>
                    <NavLink className="landingBanner-form__button me-1">FlatRate</NavLink>
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
                <div className="landingBannerForm-cta">
                  <div className="row d-flex align-items-center">
                    <span className="landingBannerForm-cta__pickup col-4">Pick up Time</span>
                    <div className="col-7">
                      <div className="row">
                        <select
                          className="landingBannerForm-cta__ddown form-select col"
                          aria-label="Default select example">
                          <option selected>
                            <span>01</span>
                          </option>
                          <option value="1">02</option>
                          <option value="2">03</option>
                          <option value="3">04</option>
                        </select>
                        <select
                          className="landingBannerForm-cta__ddown form-select col"
                          aria-label="Default select example">
                          <option selected>
                            <span>00</span>
                          </option>
                          <option value="1">15</option>
                          <option value="2">30</option>
                          <option value="3">45</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
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
