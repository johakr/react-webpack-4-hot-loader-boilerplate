import React from 'react';
import { hot } from 'react-hot-loader';

import 'bulma/css/bulma.css';

class App extends React.Component {
  state = {
    count: 0,
  };

  increment = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <section class="section">
        <div className="container">
          <h1 className="title">Boilerplate</h1>
          <button className="button is-primary" onClick={this.increment}>
            CLICKED {this.state.count} TIMES
          </button>
        </div>
      </section>
    );
  }
}

export default hot(module)(App);
