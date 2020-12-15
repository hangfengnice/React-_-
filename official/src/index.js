import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

function Child() {
  console.log("child");
  return <header>head child</header>;
}

// function Son() {
//   console.log("son");
//   return <div>son</div>;
// }

class Son extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "name",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "yy",
      });
    }, 500);
  }
  render() {
    // console.log("son");
    return <header>head son</header>;
  }
}

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ha",
    };
  }
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({
  //       name: 'yy'
  //     })
  //   }, 500)
  // }
  render() {
    console.log('here');
    const { name } = this.state;
    return (
      <div>
        <Child name={name} />
        <Son />
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));
