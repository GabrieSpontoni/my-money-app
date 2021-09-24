import React from "react";

function summary(props) {
  return (
    <div className="row">
      <div className="col-12 col-sm-6 col-md-4">
        <div className="info-box">
          <span className="info-box-icon bg-success elevation-1">
            <i className="fas fa-university" />
          </span>
          <div className="info-box-content">
            <span className="info-box-text">Créditos</span>
            <span className="info-box-number">R$ {props.credit}</span>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="info-box mb-3">
          <span className="info-box-icon bg-danger elevation-1">
            <i className="fas fa-credit-card" />
          </span>
          <div className="info-box-content">
            <span className="info-box-text">Débitos</span>
            <span className="info-box-number">{props.debt}</span>
          </div>
        </div>
      </div>
      <div className="clearfix hidden-md-up" />
      <div className="col-12 col-sm-6 col-md-4">
        <div className="info-box mb-3">
          <span className="info-box-icon bg-info elevation-1">
            <i className="fas fa-money-check-alt" />
          </span>
          <div className="info-box-content">
            <span className="info-box-text">Valor consolidado</span>
            <span className="info-box-number">{props.credit - props.debt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default summary;
