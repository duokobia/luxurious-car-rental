import React from "react";

function LandingBannerCard() {
  return (
    <card>
      <nav>
        <ul>
          <li>Distance</li>
          <li>Hourly</li>
          <li>Flat Rate</li>
        </ul>
      </nav>
      <form>
        <input
          className="form-control my-4"
          type="text"
          placeholder="Pick Off Address"
          aria-label="default input example"
        />
        <input
          className="form-control my-4"
          type="text"
          placeholder="Drop Off Address"
          aria-label="default input example"
        />
        <input
          className="form-control my-4"
          type="text"
          placeholder="One Way"
          aria-label="default input example"
        />
        <input
          className="form-control my-4"
          type="text"
          placeholder="08/04/2023"
          aria-label="default input example"
        />
        <span>Pick up Time</span>
        <button>Dropdown</button>
        <button>Dropdown</button>
        <button>Reserve Now</button>
      </form>
    </card>
  );
}

export default LandingBannerCard;
