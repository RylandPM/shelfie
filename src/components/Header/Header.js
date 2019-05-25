import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="link-wrap">
            <Link to="/" className="links">
              Dashboard
            </Link>
            <Link to="/add" className="links">
              Add Form
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
