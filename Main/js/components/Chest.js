import React, { Component } from "react";
import ReactDOM from "react-dom";

import exercises from "../exercises";

let style = {
  button: {
    padding: "10px",
    margin: "5px",
  },
};

export default class Chest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Ćwiczenia na nogi</h1>
        {exercises.chest.map((element, index) => {
          return (
            <button
              className="btn btn-primary"
              style={style.button}
              onClick={() =>
                this.props.onClick({
                  category: "legs",
                  id: element.id,
                  name: element.name,
                })
              }
              key={index}
            >
              {element.name}
            </button>
          );
        })}
      </>
    );
  }
}
