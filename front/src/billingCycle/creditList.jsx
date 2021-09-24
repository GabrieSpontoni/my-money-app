import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, arrayInsert, arrayRemove } from "redux-form";

class credtList extends Component {
  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert("billingCycleForm", "credits", index, item);
    }
  }

  remove(index) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove("billingCycleForm", "credits", index);
    }
  }

  renderRows() {
    const list = this.props.list || [];

    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field
            name={`credits[${index}].name`}
            component="input"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            name={`credits[${index}].value`}
            component="input"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <div className="btn-group btn-group-toggle">
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={() => this.add(index + 1)}
            >
              <i className="fa fa-plus" />
            </button>
            <button
              type="button"
              className="btn btn-warning btn-sm"
              onClick={() => this.add(index + 1, item)}
            >
              <i className="fa fa-clone" />
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => this.remove(index)}
            >
              <i className="fa fa-trash" />
            </button>
          </div>
        </td>
      </tr>
    ));
  }
  render() {
    return (
      <div className="card-body table-responsive p-1">
        <legend>Créditos</legend>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor do crédito</th>
              <th className="table-actions">Ações</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(null, mapDispatchToProps)(credtList);
