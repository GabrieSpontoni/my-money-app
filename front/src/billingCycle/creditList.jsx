import React, { Component } from "react";
import { Field } from "redux-form";
import Grid from "../common/layout/grid";

class credtList extends Component {
  renderRows() {
    const list = this.props.list || [];

    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field name={`credits[${index}].name`} component="input" />
        </td>
        <td>
          <Field name={`credits[${index}].value`} component="input" />
        </td>
        <td></td>
      </tr>
    ));
  }
  render() {
    return (
      <Grid>
        <fieldset>
          <legend>Créditos</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Açoes</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

export default credtList;
