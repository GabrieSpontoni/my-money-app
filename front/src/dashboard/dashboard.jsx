import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSummary } from "./dashboardActions";
import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";

const mapStateToProps = (state) => ({ summary: state.dashboard.summary });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getSummary }, dispatch);

class dashboard extends Component {
  componentDidMount() {
    this.props.getSummary();
  }

  render() {
    const { credit, debt } = this.props.summary;
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <div className="container-fluid">
            <div className="row">
              <ValueBox
                color="green"
                value={`R$ ${credit}`}
                text="Total de Créditos"
                icon="university"
              ></ValueBox>
              <ValueBox
                color="red"
                value={`R$ ${debt}`}
                text="Total de Débitos"
                icon="credit-card"
              ></ValueBox>
              <ValueBox
                color="blue"
                value={`R$ ${credit - debt}`}
                text="Valor Consolidado"
                icon="money-check-alt"
              ></ValueBox>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(dashboard);
