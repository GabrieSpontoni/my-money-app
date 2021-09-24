import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import LabelAndInput from "../common/form/labelAndInput";
import { init } from "./billingCycleActions";
import CredtList from "./creditList";
import DebitList from "./debitList";

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="row">
            <Field
              name="name"
              component={LabelAndInput}
              label="Nome"
              placeholder="Informe o nome"
              readOnly={readOnly}
            />
            <Field
              name="month"
              component={LabelAndInput}
              label="Mês"
              placeholder="Informe o mês"
              type="number"
              readOnly={readOnly}
            />
            <Field
              name="year"
              component={LabelAndInput}
              label="Ano"
              placeholder="Informe o Ano"
              type="number"
              readOnly={readOnly}
            />
          </div>
          <div className="card text-green">
            <CredtList list={credits} readOnly={readOnly} />
          </div>
          <div className="card text-red">
            <DebitList list={debts} readOnly={readOnly} />
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);

const selector = formValueSelector("billingCycleForm");
const mapStateToProps = (state) => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts"),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({ form: "billingCycleForm", destroyOnUnmount: false })(
    BillingCycleForm
  )
);
