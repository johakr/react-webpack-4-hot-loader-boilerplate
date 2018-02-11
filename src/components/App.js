import React from 'react';
import { hot } from 'react-hot-loader'

import { Button, Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    state = {
      count: 0,
    };

    increment = () => this.setState({ count: this.state.count + 1 });

    render() {
      return [
        <Navbar light expand="md">
          <NavbarBrand href="/">React Boilerplate</NavbarBrand>
        </Navbar>,
          <Container>
            <h1>Boilerplate</h1>
            <Row>
              <Col>
          <Button color="primary" onClick={this.increment}>CLICKED {this.state.count} TIMES</Button>
          </Col>
          </Row>
        </Container>
      ];
    }
  }
  
export default hot(module)(App);