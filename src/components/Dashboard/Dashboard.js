import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
    this.deleteProduct = this.deleteProduct.bind(this);
    this.getMyInventory = this.getMyInventory.bind(this);
  }

  componentDidMount() {
    this.getMyInventory();
  }

  getMyInventory() {
    axios.get("/api/inventory").then(response => {
      // console.log(response);
      this.setState({
        inventory: response.data
      });
    });
  }

  deleteProduct(id) {
    axios.delete(`/api/inventory/${id}`).then(this.getMyInventory);
  }

  render() {
    // const { inventory, getInv, setEditProduct } = this.props;
    const { inventory } = this.state;
    const invDisplay = inventory.map(item => {
      return (
        <Product
          product={item}
          deleteProduct={this.deleteProduct}
          getInv={inventory}
          // setEditProduct={setEditProduct}
        />
      );
    });
    return (
      <div className="Dashboard">
        <div>{invDisplay}</div>
      </div>
    );
  }
}
