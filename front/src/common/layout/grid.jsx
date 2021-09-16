import React from "react";

function layout(props){
    return (
        // valores para gridClasses : col-xs-00 , col-sm-00, col-md-00, col-lg-00
        <div className="col-xs-12 col-sm-4 col-md-00 col-lg-00">
            {props.children}
        </div>
    )
}
export default layout