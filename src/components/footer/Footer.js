import React from "react";

function Footer() {
  return (
    <footer className="appFooter container-fluid">
      <card className="card">
        <div className="row px-3 py-3">
          <div className="row px-3 py-3">
            <div className="col-3">
              <h4>LuxuriousRentals</h4>
              <span>Subscribe to the newletter</span>
              <input />
            </div>
            <nav className="col-9">
              <div className="row">
                <ul className="col-4 list-unstyled">
                  <li className="appFooter-list__heading">Top Cities</li>
                  <li>New York</li>
                  <li>London</li>
                  <li>Berlin</li>
                  <li>Los Angeles</li>
                  <li>Paris</li>
                </ul>
                <ul className="col-4 list-unstyled">
                  <li className="appFooter-list__heading">Explore</li>
                  <li>Intercity rides</li>
                  <li>Limousine service</li>
                  <li>Chauffeur service</li>
                  <li>Private car service</li>
                  <li>Airport transfer</li>
                </ul>
                <ul className="col-4 list-unstyled">
                  <li className="appFooter-list__heading">Intercity rides</li>
                  <li>East Hampton - New York</li>
                  <li>New York - Washington</li>
                  <li>New York - Philadephia</li>
                  <li>Abu Dhabi - Dubai</li>
                  <li>London - Birmingham</li>
                </ul>
              </div>
            </nav>
            <div className="row mt-5">
              <span className="col-4">@ 2023 LuxuriousRentals</span>
              <ul className="col-4 d-flex align-items-center justify-content-between list-unstyled ps-3">
                <li>Terms</li>
                <li>Privacy policy</li>
                <li>Legal notice</li>
                <li>Accessibility</li>
              </ul>
              <div className="col-4">
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
