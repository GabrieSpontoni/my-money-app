import React from "react";

function treeItem(props) {
  return (
    <ul className="nav nav-treeview">
      <li className="nav-item">
        <a href={props.path} className="nav-link">
          <i className={`fas fa-${props.icon} nav-icon`} />
          <p>{props.label}</p>
        </a>
      </li>
    </ul>
  );
}
export default treeItem;
