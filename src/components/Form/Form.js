import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      price: 0,
      img: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.reset = this.reset.bind(this);
    this.postNewProduct = this.postNewProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }
  changeHandler(state, inp) {
    let value = inp;
    this.setState({
      [state]: value
    });
  }
  reset() {
    this.setState({
      id: 0,
      name: "",
      price: 0,
      img: ""
    });
  }

  postNewProduct() {
    axios.post("/api/product", this.state).then(this.props.getInv);
  }

  updateProduct(id) {
    axios.put(`/api/inventory/${id}`, this.state).then(this.props.getInv);
  }

  componentDidUpdate(prevProps) {
    let { currentProduct } = this.props;
    // console.log(currentProduct);
    if (currentProduct.id !== prevProps.currentProduct.id) {
      this.setState({
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        img: currentProduct.img
      });
    }
  }

  render() {
    const { getInv } = this.props;
    return (
      <div>
        <img src={this.state.img} />
        <input
          className="ImageUrl"
          onChange={e => {
            this.changeHandler("img", e.target.value);
          }}
        />
        <input
          className="ProductName"
          onChange={e => {
            this.changeHandler("name", e.target.value);
          }}
        />
        <input
          className="Price"
          onChange={e => {
            this.changeHandler("price", e.target.value);
          }}
        />
        <button
          className="ResetInputs"
          onClick={e => {
            this.reset();
          }}
        >
          Cancel
        </button>
        {this.state.id !== 0 ? (
          <button
            className="Update"
            onClick={() => {
              this.updateProduct(this.state.id);
            }}
          >
            Update Product
          </button>
        ) : (
          <button
            className="SaveInputs"
            onClick={e => {
              this.postNewProduct();
              getInv();
            }}
          >
            Add to Inventory
          </button>
        )}
      </div>
    );
  }
}
