import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import './assets/style.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <div>Get started!</div>
        <div>Value: {this.state.counter}</div>
        <button onClick={this.handleClick}>Counter</button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
