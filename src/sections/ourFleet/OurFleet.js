import React from "react";

function OurFleet() {
  return (
    <section className="landing-our-fleet">
      <div>
        <h3>Our Fleet</h3>
        <span>
          We invite you to try our services, and we perrsonally guarantee that you will be
          completely satified.
        </span>
      </div>
      <div className="landing-our-fleet-carousel">
        <ul>
          <li>All</li>
          <li>Luxury</li>
          <li>Business</li>
          <li>Crossover</li>
        </ul>
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
    </section>
  );
}

export default OurFleet;
