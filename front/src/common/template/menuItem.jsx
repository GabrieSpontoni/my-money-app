import React from "react";

function menuItem(props) {
  return (
    <li className="nav-item">
      <a href={props.path} className="nav-link">
        <i className={`nav-icon fas fa-${props.icon}`} />
        <p>{props.label}</p>
      </a>
    </li>
  );
}

export default menuItem;
