import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "helo",
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    console.log("helo");
    return (
      <div>
        <h1>Hello, world! {this.state.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
const numbers = [1, 2, 3]
const listItems = numbers.map(item => <li key={item}>{item}</li>)

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit(e) {
    console.log(this.state.value);
    e.preventDefault()
  }
  render() {
    return <form onSubmit={(e) => this.handleSubmit(e)}>
    <label>
      Name:
      <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
    </label>
    <input type="submit" value="Submit" />
  </form>
  }
}


ReactDOM.render(<NameForm />, document.getElementById("root"))
