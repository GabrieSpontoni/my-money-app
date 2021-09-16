import React from "react";

function header() {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-black navbar-dark">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="/">
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
      </nav>
    </div>
  );
}

export default header;
