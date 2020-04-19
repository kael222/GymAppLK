import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "react-bootstrap/Form";
import exercises from "../exercises";

let style = {
  button: {
    padding: "10px",
    margin: "5px",
  },
};

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    if (this.props.elements.length > 0) {
      let elements = this.props.elements.map((element, index) => {
        return (
          <div key={index}>
            {element.name}{" "}
            <button
              className="btn btn-primary"
              onClick={() => this.props.onDelete(index)}
            >
              Usuń
            </button>
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Serie</Form.Label>
                <Form.Control className="w-25" as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
        );
      });

      return (
        <>
          <div>Lista ćwiczeń</div>
          {elements}
        </>
      );
    } else {
      return <div>Jeszcze nic nie ma :(</div>;
    }
  }
}
