import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({ tab: state.tab });

class tabContent extends Component {
  render() {
    const selected = this.props.tab.selected === this.props.id;
    return (
      <div
        id={this.props.id}
        className={`tab-pane ${selected ? "active" : ""}`}
      >
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(tabContent);
