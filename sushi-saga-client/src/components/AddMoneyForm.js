import React, { Component } from "react";

class AddMoneyForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.addMoney}>
        <input type="number" />
        <button type="submit"> Add money</button>
      </form>
    );
  }
}

export default AddMoneyForm;
