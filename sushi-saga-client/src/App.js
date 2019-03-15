import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      uneatenSushi: [],
      moneyLeft: 100,
      eatenSushi: []
    };
  }

  addMoney = e => {
    e.preventDefault();
    e.persist();
    this.setState({
      moneyLeft: this.state.moneyLeft + parseInt(e.target[0].value)
    });
  };

  handleSushiClick = sushiObj => {
    if (
      !this.state.eatenSushi.includes(sushiObj) &&
      this.state.moneyLeft >= sushiObj.price
    ) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushiObj],
        moneyLeft: this.state.moneyLeft - sushiObj.price
      });
    } else {
      null;
    }
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushis =>
        this.setState({
          uneatenSushi: sushis
        })
      );
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.uneatenSushi}
          eatenSushi={this.state.eatenSushi}
          handleSushiClick={this.handleSushiClick}
          addMoney={this.addMoney}
        />

        <Table
          eatenSushi={this.state.eatenSushi}
          moneyLeft={this.state.moneyLeft}
        />
      </div>
    );
  }
}

export default App;
