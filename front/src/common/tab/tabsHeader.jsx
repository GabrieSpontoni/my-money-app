import React from "react";

function tabsHeader(props) {
  return (
    <ul className="nav nav-tabs" id="custom-content-above-tab" role="tablist">
      {props.children}
    </ul>
  );
}
export default tabsHeader;
