import React, { Component } from "react";
import { render } from "react-dom";

class Update extends Component {
  constructor() {
    super();
    this.state = {
      object: {},
    };
    this.update = this.update.bind(this);
    this.counter = 1;
  }
  update() {
    if (this.refs.input.value.trim() != "") {
      const object = this.state.object;
      object["field" + this.counter++] = this.refs.input.value;
      this.setState({ object });
      this.refs.input.select();
    }
  }
  render() {
    return (
      <div>
        {JSON.stringify(this.state.object)}
        <br />
        <br />
        <input ref="input" placeholder="Type some text..." />
        <button onClick={this.update}>UPDATE</button>
        <br />
        <br />
        <ul>
          {Object.values(this.state.object).map((v) => (
            <li>{v}</li>
          ))}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    // this.refs.input.focus();
  }
}
