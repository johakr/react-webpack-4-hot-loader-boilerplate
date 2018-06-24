import React from 'react';
import { hot } from 'react-hot-loader';

import Price from './Price';

import 'bulma/css/bulma.css';

class App extends React.Component {
  state = {
    count: 0,
  };

  increment = () => this.setState({ count: this.state.count + 1 });

  render() {
    return [
      <section className="hero is-primary" key="head">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">React Boilerplate</h1>
            <h2 className="subtitle">
              React 16.4 / Webpack 4 / Babel 7 beta / React Hot Loader 4
            </h2>
          </div>
        </div>
      </section>,
      <section className="section" key="button">
        <div className="container">
          <button className="button is-primary" onClick={this.increment}>
            CLICKED {this.state.count} TIMES
          </button>
        </div>
      </section>,
      <section className="section" key="content">
        <div className="container" />
        <div className="container">
          <Price />
        </div>
      </section>,
    ];
  }
}

export default hot(module)(App);
