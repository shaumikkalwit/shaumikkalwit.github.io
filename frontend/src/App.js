import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Flexbox from './components/Flexbox';
import FirstScreen from './components/FirstScreen';
import HomeTitle from './components/HomeTitle';
import Scroll from './components/Scroll';

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
       <FirstScreen>
        <HomeTitle>Shaumik<br></br>Kalwit</HomeTitle>

        <Scroll>Scroll to learn more.</Scroll>
       </FirstScreen>

      </Flexbox>
    </div>
  );
}

export default App;
