import React from "react";

function LandingServices() {
  return (
    <section className="landing-services container pt-5">
      <div className="col-8 offset-3 d-flex align-items-center justify-content-center my-5">
        <h2 className="pe-5">Services</h2>
        <small className="row">
          <span>We invite you to try our services, and we personally</span>
          <span>guarantee that you will be completely satified.</span>
        </small>
      </div>
      <div>
        <div className="servicesCard-row row gx-5 px-5 mb-5">
          <card className="card servicesCard col d-flex align-items-center justify-content-center flex-row p-3">
            <img src="" alt="Airport-transfers" />
            <div className="card-body">
              <h4>Airport transfers</h4>
              <p>
                With additional wait time and flight tracking in case of delays, our service is
                optimized to make every airport transfer a breeze.
              </p>
              <button className="px-4">Read More</button>
            </div>
          </card>
          <card className="card servicesCard col d-flex align-items-center justify-content-center flex-row p-3">
            <img src="" alt="Intercity-trips" />
            <div className="card-body">
              <h4>Intercity trips</h4>
              <p>
                Your stress free silution for travelling between cities with chauffeurs all over the
                world.
              </p>
              <button className="px-4">Read More</button>
            </div>
          </card>
        </div>
        <div className="servicesCard-row row gx-5 px-5 mb-5">
          <card className="card servicesCard col d-flex align-items-center justify-content-center flex-row p-3">
            <img src="" alt="Wedding-events" />
            <div className="card-body">
              <h4>Wedding events</h4>
              <p>
                Our friendly and attentive service centered with thorough operation designed to
                detail ensures you can truly selos and enjoy your special day.
              </p>
              <button className="px-4">Read More</button>
            </div>
          </card>
          <card className="card servicesCard col d-flex align-items-center justify-content-center flex-row p-3">
            <img src="" alt="Business-meetings" />
            <div className="card-body">
              <h4>Business meetings</h4>
              <p>
                Focus on your meeting with your partners. target about the need and the car, which
                will distract your thoughts
              </p>
              <button className="px-4">Read More</button>
            </div>
          </card>
        </div>
      </div>
    </section>
  );
}

export default LandingServices;
