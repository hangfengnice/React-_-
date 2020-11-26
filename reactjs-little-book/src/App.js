import React, { Component } from 'react';
import Theme from './context'


class Index extends Component {
  static contextType = Theme
  render () {
    console.log(this.context);
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}


class Header extends Component {
  render () {
    return (
    <div>
      <h2>This is header</h2>
      <Title />
    </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
    <div>
      <h2>This is main</h2>
      <Content />
    </div>
    )
  }
}

class Title extends Component {
  render () {
    return (
      <h1>React.js 小书标题</h1>
    )
  }
}

class Content extends Component {
  render () {
    return (
    <div>
      <h2>React.js 小书内容</h2>
    </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'hangfneg'
    }
  }
  render() {

    return (
      <div>
        <Theme.Provider name={'hangfeg'} value={{ThemeColor: 'lightblue'}}>
          <Index />
        </Theme.Provider>

      </div>
    );
  }

}

export default App;
