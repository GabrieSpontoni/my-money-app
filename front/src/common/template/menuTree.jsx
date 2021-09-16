import React from "react";

function menuTree(props) {
  return (
    <li className="nav-item has-treeview menu-open">
      <a href={props.path} className="nav-link">
        <i className={`nav-icon fa fa-${props.icon}`} />
        <p>
          {props.label}
          <i className="right fas fa-angle-left" />
        </p>
      </a>
      {/* props.children irá pegar todos os atributos do filho, nesse caso irá pegar os atributos de treeItem.jsx quando for instanciado em menu.jsx */}
      {props.children}
    </li>
  );
}
export default menuTree;
