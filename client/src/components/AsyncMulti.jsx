import React, { Component } from "react";
import AsyncSelect from "react-select/lib/Async";
import axios from "axios";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: "#8c1515",
    padding: "2%",
    width: "400px"
  })
};

// const getAttributes = attribute => {
//   console.log(attribute);
//   var that = this;
//   axios
//     .post("/api/post/attr", attribute)
//     .then(function(response) {
//       console.log(response.data);
//       kiki = response.data.map(option => ({
//         value: option.country,
//         label: option.country
//       }));
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// };

export default class AsyncMulti extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  async getOptions(inputValue) {
    console.log(this.props.attribute);
    if (!inputValue) {
      return [];
    }
    var attribute = {
      limit: 10,
      attribute: this.props.attribute,
      current_search: inputValue
    };
    console.log(attribute);
    var answer = await axios.post("/api/post/attr", attribute);

    return await answer.data.map(option => ({
      value: option.country,
      label: option.country
    }));
  }
  handleChange(selectedOption) {
    // console.log(selectedOption);
    this.setState({ selectedOption });
    this.props.constructMulti(this.props.attribute, selectedOption);
    // console.log(`Option selected:`, selectedOption);
  }
  handleInputChange(inputValue) {
    // console.log("noticing change", inputValue);
    this.setState({ inputValue });
    return inputValue;
  }

  render() {
    return (
      <AsyncSelect
        // This is the example that the list was cleared (FIXED)
        // defaultOptions
        value={this.state.selectedOption}
        loadOptions={this.getOptions}
        onChange={this.handleChange}
        closeMenuOnSelect={false}
        isMulti
        styles={customStyles}
      />
    );
  }
}
