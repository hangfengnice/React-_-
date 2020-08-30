import React from "react";
import ReactDOM from "react-dom";
import {} from 'redux'

import "./App.css";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
    };
    this.red = React.createRef();
    this.update = this.update.bind(this);
  }
  update(e) {
    console.log(this.red);
    this.setState({
      red: this.red.current.inp.current.value,
    });
  }
  render() {
    return (
      <div>
        <NumberInput ref={this.red} update={this.update}></NumberInput>
        {this.state.red}
      </div>
    );
  }
}
class NumberInput extends React.Component {
  constructor() {
    super();
    this.inp = React.createRef();
  }

  render() {
    return (
      <div>
        <input
          ref={this.inp}
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update}
        />
      </div>
    );
  }
}

NumberInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  val: PropTypes.number,
  label: PropTypes.string,
  update: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["number", "range"]),
};
NumberInput.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  val: 0,
  label: "",

  type: "range",
};

export default App;
