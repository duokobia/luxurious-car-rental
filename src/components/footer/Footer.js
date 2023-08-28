import React from "react";
import {
  BiLogoYoutube,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare
} from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";

function Footer() {
  return (
    <footer className="appFooter container-fluid mb-5">
      <card className="appFooter-card card ps-5 pt-4 pb-0">
        <div className="row ps-3 py-3">
          <div className="row ps-3 py-3">
            <div className="col-3">
              <h4 className="appFooter-logo pb-5">LuxuriousRentals</h4>
              <span className="appFooter-subcribe row ms-1 mb-3">Subscribe to the newletter</span>
              <div className="appFooter-inputContainer d-flex align-items-baseline justify-content-between me-5 pe-5">
                <input
                  className="appFooter-input col mb-4 p-2 ps-3"
                  type="text"
                  placeholder="Email"
                  aria-label="default input example"
                />
                <span className="appFooter-inputArrow mb-4 p-2">
                  <IoIosArrowRoundForward className="fs-3 pb-1" />
                </span>
              </div>
            </div>
            <nav className="col-8 offset-1">
              <div className="row">
                <ul className="appFooter-list col-4 list-unstyled">
                  <li>
                    <h6 className="pb-3">Top Cities</h6>
                  </li>
                  <li className="pb-2">New York</li>
                  <li className="pb-2">London</li>
                  <li className="pb-2">Berlin</li>
                  <li className="pb-2">Los Angeles</li>
                  <li className="pb-2">Paris</li>
                </ul>
                <ul className="appFooter-list col-4 list-unstyled">
                  <li>
                    <h6 className="pb-3">Explore</h6>
                  </li>
                  <li className="pb-2">Intercity rides</li>
                  <li className="pb-2">Limousine service</li>
                  <li className="pb-2">Chauffeur service</li>
                  <li className="pb-2">Private car service</li>
                  <li className="pb-2">Airport transfer</li>
                </ul>
                <ul className="appFooter-list col-4 list-unstyled">
                  <li>
                    <h6 className="pb-3">Intercity rides</h6>
                  </li>
                  <li className="pb-2">East Hampton - New York</li>
                  <li className="pb-2">New York - Washington</li>
                  <li className="pb-2">New York - Philadephia</li>
                  <li className="pb-2">Abu Dhabi - Dubai</li>
                  <li className="pb-2">London - Birmingham</li>
                </ul>
              </div>
            </nav>
            <div className="row mt-5">
              <div className="row d-flex align-items-baseline justify-content-between">
                <div className="col-7">
                  <div className="row">
                    <span className="appFooter-copyright col-4">@ 2023 LuxuriousRentals</span>
                    <ul className="appFooter-tandc col d-flex align-items-baseline justify-content-between list-unstyled ps-5">
                      <li>Terms</li>
                      <li>Privacy policy</li>
                      <li>Legal notice</li>
                      <li>Accessibility</li>
                    </ul>
                  </div>
                </div>
                <div className="appFooter-copyright appFooter-socialIcons col-3">
                  <span className="fs-3  pe-3">
                    <BiLogoYoutube />
                  </span>
                  <span className="fs-3 pe-3">
                    <BiLogoFacebook />
                  </span>
                  <span className="fs-3 pe-3">
                    <BiLogoTwitter />
                  </span>
                  <span className="fs-3 pe-3">
                    <BiLogoInstagramAlt />
                  </span>
                  <span className="fs-3 pe-3">
                    <BiLogoLinkedinSquare />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </card>
    </footer>
  );
}

export default Footer;
