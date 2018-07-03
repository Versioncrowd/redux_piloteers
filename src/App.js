import React, { Component, Fragment } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Navbar from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Container>
            <Navbar />
            <Blog />
          </Container>
      </BrowserRouter>
    );
  }
}

export default App;
