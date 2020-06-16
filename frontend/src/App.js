import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Flexbox from './components/Flexbox';
import Section from './components/Section';
import LandingPage from './components/LandingPage';
import HomeTitle from './components/HomeTitle';
import Scroll from './components/Scroll';
import AboutTitle from './components/AboutTitle';
import AboutText from './components/AboutText';
import AboutPicture from './components/AboutPicture';
import AboutMePicture from './images/AboutMePicture.jpg';
import Title from './components/Title';
import ImgLinks from './components/ImgLinks';
import Facebook from './images/facebook (1).png';
import Github from './images/github.png';
import Footer from './components/Footer';
import FooterContent from './components/FooterContent';


class App extends React.Component { 
  constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }
  render() {
    return (
    <div>
     <p className="App-intro">;{this.state.apiResponse}</p>
      <Navbar bg="dark" variant="dark" expand="lg" position="sticky" fixed="top">
        <Navbar.Brand href="#LandingPage">shaumikkalwit</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#AboutUs" >About Me</Nav.Link>
          <Nav.Link href="#Projects" color="red">Projects</Nav.Link>
        </Nav>
        <div class="icons">
          <a href="https://github.com/shaumikkalwit"><ImgLinks src={Github}/></a>  
          <a href="https://www.facebook.com/shaumik.kalwit/"><ImgLinks src={Facebook}/></a>
         </div>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>

      <div id="LandingPage"></div>
       <Flexbox>
        <LandingPage>
         <HomeTitle>Shaumik</HomeTitle>
         <HomeTitle>Kalwit</HomeTitle>

         <Scroll>Scroll to learn more.</Scroll>
        </LandingPage>

       <div id="AboutUs"></div>
       <Section>

        <AboutTitle>About Me</AboutTitle>

        <AboutText>Hi there! My name is Shaumik Kalwit. I live in San Jose California. 
        I go to Lynbrook High School. I love spending time with family and friends. In my 
        free time, I enjoy playing basketball, video games, and even cards with family. I 
        also enjoy programming, and reading in my free time. I am fluent in HTML, CSS, and 
        Python. I also have some exposure to JavaScript and React. Learn more through my links!</AboutText>
       </Section>

       <div id="Projects"></div>
       <Section>

        <Title>Projects</Title>

       </Section>
       <Section>
       </Section>

       <Footer>
       <FooterContent>Copyright © 2020 shaumikkalwit.</FooterContent>
       <FooterContent>Website Made By Shaumik Kalwit</FooterContent>
       </Footer>

      </Flexbox>
    </div>
  );
 }
}

export default App;