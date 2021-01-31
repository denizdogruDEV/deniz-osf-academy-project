import React, { Component } from "react";
import "./quantityComp.scss";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class QuantityPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
      max: 100,
      min: 0,
    };
  }

  IncrementItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity < 99) {
        return {
          quantity: prevState.quantity + 1,
        };
      } else {
        return null;
      }
    });
  };
  DecreaseItem = () => {
    this.setState((prevState) => {
      if (prevState.quantity > 0) {
        return {
          quantity: prevState.quantity - 1,
        };
      } else {
        return null;
      }
    });
  };
  ToggleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  render() {
    return (
      <div className="quantity-picker">
        <div className="quantity-form">
          <button onClick={this.DecreaseItem}>-</button>
          <input
            type="number"
            className="inputne"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <button onClick={this.IncrementItem}>+</button>
        </div>
        <Button className="green add-to-cart">Add to Cart</Button>
      </div>
    );
  }
}
