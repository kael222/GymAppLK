import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { menuItems } = this.props;
    console.log(menuItems);

    // const linkItems = menuItems.map((element) => {
    //     return (<Link to={"/exercises/" + el.name}> {el.name}</Link>)

    // });

    let linkItems = menuItems.map((element, index) => {
      return (
        <Link to={`/exercises/${element.url}`} key={index}>
          {element.title}
        </Link>
      );
    });

    return (
      <nav>
        <ul>
          {" "}
          <Link to={"/exercises/exercises"}> Twój plan na dziś!</Link>
          {linkItems}
        </ul>
      </nav>
    );
  }
}
