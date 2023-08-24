import React from "react";

function OnlyToday() {
  return (
    <section className="onlyToday container py-5">
      <div className="row">
        <div className="d-flex justify-content-center">
          <div className="col my-5">
            <h2 className="pe-5">Only today $75/day</h2>
            <small className="col-3">
              <span>
                We invite you to try our services, and we perrsonally guarantee that you will be
                completely satified.
              </span>
            </small>
          </div>
        </div>
      </div>
      <div className="row pb-5">
        <card className="onlyToday-card p-5">
          <div className="d-flex flex-column">
            <h4 className="onlyToday-card__header">Cadillac Escalade</h4>
            <div className="d-flex align-items-center justify-items-center">
              <ul className="py-5 pe-5">
                <li>For Upto 8 Passengers</li>
                <li>Incredible Sound System</li>
                <li>Fibre Opticc Lights</li>
                <li>Bar Area With Fridge</li>
              </ul>
              <ul className="py-5">
                <li>Tested Windows</li>
                <li>Divider With Premium Style</li>
                <li>Multipurpose Designed Limo</li>
                <li>Chill Air Conditioning</li>
              </ul>
            </div>
            <button className="col-3">Reserve Now</button>
          </div>
          <div>
            <img src="" alt="cadillacPhoto" className="onlyToday-card__image" />
          </div>
        </card>
      </div>
    </section>
  );
}

export default OnlyToday;
