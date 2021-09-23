import React from "react";
import MenuItem from "./menuItem";
// import MenuTree from "./menuTree";
// import TreeItem from "./treeItem";

function menu() {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <MenuItem path="/" label="Dashboard" icon="tachometer-alt" />
        <MenuItem
          path="/billingCycles"
          label="Ciclos de Pagamentos"
          icon="dollar-sign"
        />

        {/* <MenuTree path="/" ico n="edit" label="Cadastro">
          <TreeItem
            path="billingCycles"
            icon="dollar-sign"
            label="Ciclos de Pagamentos"
          ></TreeItem>
        </MenuTree> */}
      </ul>
    </nav>
  );
}

export default menu;
