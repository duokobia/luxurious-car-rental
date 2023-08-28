import React from "react";
import { FaAlgolia } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="whyChooseUs container py-5">
      <div className="col-11 offset-1 d-flex align-items-center justify-content-center my-5">
        <h2 className="pe-5">Why Choose Us</h2>
        <small className="row">
          <span>At LimosRental we pride ourselves in delivering extensive services to</span>
          <span>fulfil all of your needs with first rate customer care.</span>
        </small>
      </div>
      <div className="demoOfNthChild row pb-5">
        <card className="whyChooseUs-cards col">
          <FaAlgolia className="whyChooseUs-cards__icons" />
          <h6 className="pb-2">Easy Online Booking</h6>
          <small className="whyChooseUs-cards__caption">
            With additional wait time and flight tracking in case of delays, our service.
          </small>
        </card>
        <card className="whyChooseUs-cards whyChooseUs-cards__iconsNthChild col">
          <FaAlgolia className="whyChooseUs-cards__icons" />

          <h6 className="pb-2">Professional Drivers</h6>
          <small>
            With additional wait time and flight tracking in case of delays, our service.
          </small>
        </card>
        <card className="whyChooseUs-cards col">
          <FaAlgolia className="whyChooseUs-cards__icons" />

          <h6 className="pb-2">Variety of Car Brands</h6>
          <small>
            With additional wait time and flight tracking in case of delays, our service.
          </small>
        </card>
        <card className="whyChooseUs-cards col">
          <FaAlgolia className="whyChooseUs-cards__icons" />

          <h6 className="pb-2">Online Payment</h6>
          <small>
            With additional wait time and flight tracking in case of delays, our service.
          </small>
        </card>
      </div>
    </section>
  );
}

export default WhyChooseUs;
