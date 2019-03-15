import React, { Component } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";
import AddMoneyForm from "../components/AddMoneyForm";

class SushiContainer extends Component {
  constructor() {
    super();
    this.state = {
      which4: 0
    };
  }

  handleMoreButton = () => {
    this.state.which4 === 96
      ? this.setState({
          which4: 0
        })
      : this.setState({
          which4: this.state.which4 + 4
        });
  };

  render() {
    return (
      <div className="belt">
        {this.props.sushis
          .slice(this.state.which4, this.state.which4 + 4)
          .map(sushi => {
            return (
              <Sushi
                handleSushiClick={this.props.handleSushiClick}
                eatenSushi={this.props.eatenSushi}
                key={sushi.id}
                name={sushi.name}
                price={sushi.price}
                url={sushi.img_url}
                sushi={sushi}
              />
            );
          })}
        <MoreButton handleMoreButton={this.handleMoreButton} />

        <AddMoneyForm addMoney={this.props.addMoney} />
      </div>
    );
  }
}

export default SushiContainer;
