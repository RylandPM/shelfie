import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { HashRouter, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import routes from "./routes";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   inventory: [],
    //   currentProduct: {
    //     id: 0,
    //     name: "",
    //     price: 0,
    //     img: ""
    //   }
    // };
    // this.setEditProduct = this.setEditProduct.bind(this);
  }

  // setEditProduct(obj) {
  //   // console.log(obj);
  //   this.setState({
  //     currentProduct: {
  //       id: obj.id,
  //       name: obj.name,
  //       price: obj.price,
  //       img: obj.img
  //     }
  //   });
  // }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {/* <Dashboard
            inventory={this.state.inventory}
            getInv={this.getMyInventory}
            setEditProduct={this.setEditProduct}
          />
          <Form
            getInv={this.getMyInventory}
            currentProduct={this.state.currentProduct}
          /> */}
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
