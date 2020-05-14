import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Flexbox from './components/Flexbox';
import HomeTitle from './components/HomeTitle';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" position="sticky" fixed="top">
        <Navbar.Brand href="#home">Shaumik Kalwit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">About Me</Nav.Link>
          <Nav.Link href="#home">Projects</Nav.Link>
          <Nav.Link href="#home">Contacts</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>


      <Flexbox>
        <HomeTitle>Shaumik<br></br>Kalwit</HomeTitle>
      </Flexbox>
    </div>
  );
}

export default App;
