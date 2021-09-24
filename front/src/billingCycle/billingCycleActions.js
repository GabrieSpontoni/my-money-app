import { toastr } from "react-redux-toastr";
import { selectTab, showTabs } from "../common/tab/tabActions";
import { reset as resetForm, initialize } from "redux-form";
import axios from "axios";

const BASE_URL = "http://localhost:3003/api/";
const INITIAL_VALUES = { credits: [{}], debts: [{}] };

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
}

export function create(values) {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/billingCycles`, values)
      .then((resp) => {
        toastr.success("Sucesso", "Operação realizada com sucesso");
        dispatch([init()], resetForm("billingCycleForm"));
      })
      .catch((e) => {
        toastr.error("erro na operação tente novamente", e);
      });
  };
}

export function update(values) {
  return (dispatch) => {
    console.log(values);
    const id = values._id ? values._id : "";
    axios
      .put(`${BASE_URL}/billingCycles/${id}`, values)
      .then((resp) => {
        toastr.success("Sucesso", "Operação realizada com sucesso");
        dispatch([init(), resetForm("billingCycleForm")]);
      })
      .catch((e) => {
        toastr.error("erro na operação tente novamente", e);
      });
  };
}
export function remove(values) {
  return (dispatch) => {
    const id = values._id ? values._id : "";
    axios
      .delete(`${BASE_URL}/billingCycles/${id}`, values)
      .then((resp) => {
        toastr.success("Sucesso", "Operação realizada com sucesso");
        dispatch([init(), resetForm("billingCycleForm")]);
      })
      .catch((e) => {
        toastr.error("erro na operação tente novamente", e);
      });
  };
}

export function showUpdate(billingCycle) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("billingCycleForm", billingCycle),
  ];
}

export function showDelete(billingCycle) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("billingCycleForm", billingCycle),
  ];
}

export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("billingCycleForm", INITIAL_VALUES),
  ];
}
