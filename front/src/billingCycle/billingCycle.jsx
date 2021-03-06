import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";
import { selectTab, showTabs } from "../common/tab/tabActions";
import List from "./billingCycleList";
import BillingCycleForm from "./billingCycleForm";
import { init, create, update, remove } from "./billingCycleActions";
import "../common/template/custom.css";

class billingCycles extends Component {
  componentDidMount() {
    this.props.selectTab("tabList");
    this.props.showTabs("tabList", "tabCreate");
    this.props.init();
  }
  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label=" Listar" icon="bars" target="tabList" />
              <TabHeader label=" Incluir" icon="plus" target="tabCreate" />
              <TabHeader
                label=" Alterar"
                icon="pencil-alt"
                target="tabUpdate"
              />
              <TabHeader label=" Excluir" icon="trash" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <List />
              </TabContent>
              <TabContent id="tabCreate">
                <BillingCycleForm
                  onSubmit={this.props.create}
                  submitLabel="Incluir"
                  submitClass="primary"
                />
              </TabContent>
              <TabContent id="tabUpdate">
                <BillingCycleForm
                  onSubmit={this.props.update}
                  submitLabel="alterar"
                  submitClass="warning"
                />
              </TabContent>
              <TabContent id="tabDelete">
                <BillingCycleForm
                  onSubmit={this.props.remove}
                  submitLabel="Remover"
                  submitClass="danger"
                  readOnly={true}
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { selectTab, showTabs, create, update, remove, init },
    dispatch
  );

export default connect(null, mapDispatchToProps)(billingCycles);
