import React from "react";

function Footer() {
  return (
    <footer className="appFooter container-fluid mb-5">
      <card className="appFooter-card card px-5 pt-4 pb-0">
        <div className="row px-3 py-3">
          <div className="row px-3 py-3">
            <div className="col-3">
              <h4 className="appFooter-logo pb-5">LuxuriousRentals</h4>
              <span className="appFooter-subcribe row mb-2">Subscribe to the newletter</span>
              <input
                className="appFooter-input row mb-4 p-2"
                type="text"
                placeholder="Enter your Email"
                aria-label="default input example"
              />
            </div>
            <nav className="col-9">
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
              <span className="appFooter-copyright col-4">@ 2023 LuxuriousRentals</span>
              <ul className="appFooter-tandc col-4 d-flex align-items-center justify-content-between list-unstyled ps-3">
                <li>Terms</li>
                <li>Privacy policy</li>
                <li>Legal notice</li>
                <li>Accessibility</li>
              </ul>
              <div className="appFooter-copyright appFooter-socialIcons col-4 ps-5">
                <span>Icon</span>
                <span>Icon</span>
                <span>Icon</span>
                <span>Icon</span>
                <span>Icon</span>
              </div>
            </div>
          </div>
        </div>
      </card>
    </footer>
  );
}

export default Footer;
