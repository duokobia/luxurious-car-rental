import React from "react";
import { NavLink } from "react-router-dom";

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
        <nav className="ourFleet-carousel__navList col-3 offset-5">
          <ul className="d-flex align-items-center justify-content-between list-unstyled">
            <li>
              <NavLink>All</NavLink>
            </li>
            <li>
              <NavLink>Luxury</NavLink>
            </li>
            <li>
              <NavLink>Business</NavLink>
            </li>
            <li>
              <NavLink>Crossover</NavLink>
            </li>
          </ul>
        </nav>
        <div className="ourFleet-carousel__imgsbox">
          <card>
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
          </card>
        </div>
      </div>
    </section>
  );
}

export default OurFleet;
