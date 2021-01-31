import React from "react";
import ReactDOM from "react-dom";
import "./cartPage.scss";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
const currency = "USD";
const cashForm = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: currency,
});

var cartData =
  '{"id-1":{"quantity":1,"id":"id-1","price":2195,"name":"Kristina Dam Oak Table With White Marble Top"},"id-2":{"quantity":1,"id":"id-2","price":1245,"name":"Activate Facial Mask and Charcoal Soap"}}';

function storeCartData(json) {
  cartData = JSON.stringify(json);
  return;
}

class CartContent extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: JSON.parse(cartData),
      total: 3440,
    };
    this.deleteArticle = this.deleteArticle.bind(this);
    this.setQuantity = this.setQuantity.bind(this);
    this.reduceQuantity = this.reduceQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  deleteArticle(e, id) {
    this.setState({
      total:
        this.state.total -
        this.state.articles[id]["quantity"] * this.state.articles[id]["price"],
    });
    delete this.state.articles[id];
    storeCartData(this.state.articles);
  }

  setQuantity(e, id) {
    let v = Number(e.target.value);
    console.log(v);
    if (v !== 0) {
      this.state.articles[id]["quantity"] = v;
      this.setState({
        ...this.state.articles,
        total: this.state.total + this.state.articles[id]["price"] * v,
      });
      storeCartData(this.state.articles);
    } else {
      this.deleteArticle(e, id);
    }
  }

  reduceQuantity(e, id) {
    if (this.state.articles[id]["quantity"] > 1) {
      this.state.articles[id]["quantity"] += -1;
      this.setState({
        ...this.state.articles,
        total: this.state.total - this.state.articles[id]["price"],
      });
      storeCartData(this.state.articles);
    } else {
      this.deleteArticle(e, id);
    }
  }

  incrementQuantity(e, id) {
    this.state.articles[id]["quantity"] += 1;
    this.setState({
      ...this.state.articles,
      total: this.state.total + this.state.articles[id]["price"],
    });
    storeCartData(this.state.articles);
  }

  render() {
    var cartItems = this.state.articles;
    var cartArray = [];
    Object.keys(cartItems).forEach(function (key) {
      cartArray.push(cartItems[key]);
    });
    return (
      <div className="gray-bg">
        <Container>
          <div className="breadcrumb-box">
            <Breadcrumb>
              <Breadcrumb.Item className="breadcrumb-default" href="/#home">
                Home
              </Breadcrumb.Item>

              <Breadcrumb.Item active>Shopping Cart</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <h1 className="stripe-headline product-detail">Shopping Cart</h1>
        </Container>
        <Container>
          <div className="white-bg">
            <div id="cartContent">
              <div className="cart-wrapper">
                {cartArray.map((item) => (
                  <CartContentRow
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    inputHandler={this.setQuantity}
                    reduceBinder={this.reduceQuantity}
                    incrementBinder={this.incrementQuantity}
                    deleteBinder={this.deleteArticle}
                  />
                ))}
              </div>
              <div className="checkout">
                <div className="checkout-left">
                  <Form.Control
                    className="coupon"
                    size="sm"
                    type="text"
                    placeholder="Enter Coupon Code"
                  />
                  <Button className="checkout-button">Apply</Button>
                </div>
                <div className="checkout-right">
                  <Button className="checkout-button">Update Cart</Button>
                  <Button className="green add-to-cart checkout">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
              <div className="cart-total">
                <h3>Order Total:</h3>
                {cashForm.format(this.state.total)}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const CartContentRow = (props) => (
  <div key={props.id} className="cart-item">
    <div className="black-box"></div>
    <div className="cart-main-title">
      <div className=" cart-title">{props.name}</div>

      <div className="price-small">{cashForm.format(props.price)}</div>
    </div>
    <div className="cart-buttons">
      <EditableCartReduce
        controlsClass="cart-controls"
        action={props.reduceBinder}
        id={props.id}
      />
      <input
        className="cart-input"
        type="number"
        value={props.quantity}
        onChange={(e) => props.inputHandler(e, props.id)}
      />
      <EditableCartIncrement
        controlsClass="cart-controls"
        action={props.incrementBinder}
        id={props.id}
      />
    </div>
    <div className="price-total">
      {cashForm.format(props.price * props.quantity)}
    </div>
    <div className="delete">
      <EditableCartDelete
        className="delete"
        controlsClass="cart-controls"
        action={props.deleteBinder}
        id={props.id}
      />
    </div>
  </div>
);

const CartContentControls = (props) => (
  <button
    className={props.controlsClass}
    onClick={(e) => props.action(e, props.id)}
  >
    {props.children}
  </button>
);

const EditableCartReduce = (props) => (
  <CartContentControls
    controlsClass={props.controlsClass}
    action={props.action}
    id={props.id}
  >
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
    </svg>
  </CartContentControls>
);

const EditableCartIncrement = (props) => (
  <CartContentControls
    controlsClass={props.controlsClass}
    action={props.action}
    id={props.id}
  >
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
    </svg>
  </CartContentControls>
);

const EditableCartDelete = (props) => (
  <CartContentControls
    controlsClass={props.controlsClass}
    action={props.action}
    id={props.id}
  >
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084
         7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"
      />
    </svg>
  </CartContentControls>
);

ReactDOM.render(<CartContent />, document.querySelector("#root"));
export default CartContent;
