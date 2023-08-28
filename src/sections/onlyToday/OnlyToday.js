import React from "react";
import armoured1 from "../../assets/img/armoured1.png";

function OnlyToday() {
  return (
    <section className="onlyToday container pt-3">
      <div className="col-6 offset-3 d-flex align-items-center justify-content-center">
        <div className="col my-5">
          <h2 className="onlyToday-header d-flex align-items-center justify-content-center pe-5">
            Only today $75/day
          </h2>
          <small className="row offset-2">
            <div>
              <span className="col d-block">
                Take advantage of our hot offers saving a significant amount
              </span>
              <span className="col d-block">when renting a limousine.</span>
            </div>
          </small>
        </div>
      </div>
      <div className="row pb-5">
        <card className="onlyToday-card p-5">
          <div className="d-flex flex-column">
            <h4 className="onlyToday-card__header">Cadillac Escalade</h4>
            <div className="d-flex align-items-center justify-items-center">
              <ul className="onlyToday-list py-5 pe-5">
                <li>For Upto 8 Passengers</li>
                <li>Incredible Sound System</li>
                <li>Fibre Opticc Lights</li>
                <li>Bar Area With Fridge</li>
              </ul>
              <ul className="onlyToday-list py-5">
                <li>Tested Windows</li>
                <li>Divider With Premium Style</li>
                <li>Multipurpose Designed Limo</li>
                <li>Chill Air Conditioning</li>
              </ul>
            </div>
            <button className="col-3">Reserve Now</button>
          </div>
          <div>
            <img src={armoured1} alt="cadillacPhoto" className="onlyToday-card__image" />
          </div>
        </card>
      </div>
    </section>
  );
}

export default OnlyToday;
