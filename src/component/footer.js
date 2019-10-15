import React from "react";

export default function footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xs-6 custom-footer center-item">
              © Khoana11
            </div>
            <div className="col-lg-6 col-xs-6 custom-footer center-item">
              <ul className="center-item">
                <li>
                  <i className="fab fa-facebook-f"></i>
                </li>
                <li>
                  <i className="fab fa-instagram"></i>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
