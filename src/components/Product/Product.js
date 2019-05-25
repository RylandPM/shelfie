import React, { Component } from "react";
import { history } from "react-router-dom";

export default class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product, deleteProduct, setEditProduct } = this.props;
    return (
      <div>
        <img src={product.img} />
        <h2>{product.name}:</h2>
        <h3>${product.price}</h3>
        <button onClick={() => deleteProduct(product.id)}>Delete</button>
        <button
          onClick={() => {
            this.props.history.push("/edit/:id");
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}
