import { toastr } from "react-redux-toastr";
import { selectTab } from "../common/tab/tabActions";
import { reset as resetForm } from "redux-form";
import axios from "axios";


const BASE_URL = "http://localhost:3003/api/";
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
        dispatch([
          getList(),
          selectTab("tabList"),
          resetForm("billingCycleForm"),
        ]);
      })
      .catch((e) => {
        toastr.error("erro na operação tente novamente", e);
      });
  };
}
