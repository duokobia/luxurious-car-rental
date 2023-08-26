import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AppCarousel from "../../components/carousel/AppCarousel";

function OurFleet() {
  return (
    <section className="ourFleet container py-5">
      <div className="col-8 offset-3 d-flex align-items-center justify-content-center my-5">
        <h2 className="pe-5">Our Fleet</h2>
        <small className="row">
          <span>We offer an extensive fleet of vehicles including</span>
          <span> service, limosines and crossovers</span>
        </small>
      </div>
      <div className="ourFleet-carousel">
        <div className="row d-flex align-items-baseline pb-4">
          <nav className="ourFleet-carousel__navList col-3 offset-4">
            <ul className="d-flex align-items-center justify-content-between list-unstyled">
              <li>
                <NavLink className="landingBanner-form__button landingBanner-form__buttonA active me-1">
                  All
                </NavLink>
              </li>
              <span className="landingBanner-form__divider me-1">|</span>
              <li>
                <NavLink landingBanner-form__divider me-1>
                  Luxury
                </NavLink>
              </li>
              <span className="landingBanner-form__divider me-1">|</span>
              <li>
                <NavLink landingBanner-form__divider me-1>
                  Business
                </NavLink>
              </li>
              <span className="landingBanner-form__divider me-1">|</span>
              <li>
                <NavLink landingBanner-form__divider me-1>
                  Crossover
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="col-3 d-flex align-items-center justify-content-center">
            <span className="ourFleet-carousel__navArrow">
              <IoIosArrowBack />
            </span>
            <span className="ourFleet-carousel__navArrow">
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        <div className="ourFleet-carousel__imgsbox">
          <AppCarousel />
          {/* <card>
            <img src="" alt="" />
            <h3>Airport transfers</h3>
            <p>
              With additional wait time and flight tracking in case of delays, our service is
              optimized to make every airport transfer a breeze.
            </p>
            <button>Read More</button>
          </card>
          <card>
            <img src="" alt="" />
            <h3>Intercity trips</h3>
            <p>
              With additional wait time and flight tracking in case of delays, our service is
              optimized to make every airport transfer a breeze.
            </p>
            <button>Read More</button>
          </card>
          <card>
            <img src="" alt="" />
            <h3>Wedding events</h3>
            <p>
              With additional wait time and flight tracking in case of delays, our service is
              optimized to make every airport transfer a breeze.
            </p>
            <button>Read More</button>
          </card>
          <card>
            <img src="" alt="" />
            <h3>Business meetings</h3>
            <p>
              With additional wait time and flight tracking in case of delays, our service is
              optimized to make every airport transfer a breeze.
            </p>
            <button>Read More</button>
          </card> */}
        </div>
      </div>
    </section>
  );
}

export default OurFleet;
