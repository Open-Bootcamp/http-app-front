import React from "react";
import "./buttonFilter.css";

class ButtonFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'all'};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="select">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </div>
    );
  };
};

export default ButtonFilter;
