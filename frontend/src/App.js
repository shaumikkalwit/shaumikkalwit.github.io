import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Card, ListGroup } from 'react-bootstrap';
import Flexbox from './components/Flexbox';
import Section from './components/Section';
import ProjectsSection from './components/ProjectsSection';
import CardFlexbox from './components/CardFlexbox';
import LandingPage from './components/LandingPage';
import HomeTitle from './components/HomeTitle';
import Scroll from './components/Scroll';
import AboutText from './components/AboutText';
import AboutPicture from './components/AboutPicture';
import AboutMePicture from './images/AboutMePicture.jpg';
import Title from './components/Title';
import ImgLinks from './components/ImgLinks';
import ImgLinksG from './components/ImgLinksG';
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

        <Title>About Me</Title>

        <AboutText>Hi there! My name is Shaumik Kalwit. I live in San Jose California. 
        I go to Lynbrook High School. I love spending time with family and friends. In my 
        free time, I enjoy playing basketball, video games. I also enjoy programming and 
        reading in my free time. I am fluent in HTML, CSS, and Python. I also have some 
        exposure to JavaScript and React. Learn more through my links!</AboutText>
       </Section>

       <div id="Projects"></div>
       <ProjectsSection>

        <Title>Projects</Title>

        <CardFlexbox>
        <Card style={{ width: '20rem' }}>
          <Card.Header><b>Github Stats</b></Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Total Number of Repositories:<br></br> 3</ListGroup.Item>
            <ListGroup.Item>Total Number of Commits:<br></br> 380</ListGroup.Item>
            <ListGroup.Item>Total Number of Commits in Last Year:<br></br> 380</ListGroup.Item>
            <ListGroup.Item>Total Number of Followers:<br></br> 5</ListGroup.Item>
            <ListGroup.Item>Total Number of Followers:<br></br> 5</ListGroup.Item>
            <ListGroup.Item><a href="https://github.com/shaumikkalwit"><ImgLinksG src={Github}/></a></ListGroup.Item>
          </ListGroup>
        </Card>


        <Card style={{ width: '20rem' }}>
          <Card.Header><b>Projects</b></Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Guessing Game:<br></br> A guessing game made for you to relax and have fun. <br></br>(Python)</ListGroup.Item>
            <ListGroup.Item>Lynbrook AID Website: <br></br>Website created for the Lynbrook AID Organization
            in Lynbrook. <br></br>(JavaScript, HTML, CSS)</ListGroup.Item>
            <ListGroup.Item>GhostWriter: <br></br>Researches and compiles information related to a given topic.
             <br></br>(Python)</ListGroup.Item>
          </ListGroup>
        </Card>
        </CardFlexbox>

       </ProjectsSection>

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