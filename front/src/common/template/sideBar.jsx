import React from "react";
import Menu from "./menu";

function sidebar() {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a className="brand-link">
          <img
            src="https://thumbs.dreamstime.com/b/%C3%ADcone-do-vetor-do-d%C3%B3lar-do-dinheiro-ilustra%C3%A7%C3%A3o-preto-e-branco-do-dinheiro-%C3%ADcone-linear-cont%C3%ADnuo-da-opera%C3%A7%C3%A3o-banc%C3%A1ria-92966049.jpg"
            alt="My money app"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">My Money App</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          <nav className="mt-2">
            <Menu />
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default sidebar;
