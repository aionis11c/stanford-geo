import React, { Component } from "react";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onChange={event => this.props.changeType(event.target.value)}>
        <input type="radio" value="sample" name="gender" /> sample
        <input type="radio" value="analyses" name="gender" /> analyses
        <input type="radio" value="nhhrxf" name="gender" /> NO HHRXF
      </div>
    );
  }
}
