import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Card, ListGroup } from 'react-bootstrap';
import Flexbox from './components/Flexbox';
import Section from './components/Section';
import ProjectsSection from './components/ProjectsSection';
import CardFlexbox from './components/CardFlexbox';
import CardStyled from './components/CardStyled';
import LandingPage from './components/LandingPage';
import HomeTitle from './components/HomeTitle';
import Scroll from './components/Scroll';
import AboutText from './components/AboutText';
import AboutPicture from './components/AboutPicture';
import AboutMePicture from './images/AboutMePicture.jpeg';
import Title from './components/Title';
import ImgLinks from './components/ImgLinks';
import ImgLinksG from './components/ImgLinksG';
import Facebook from './images/facebook (1).png';
import Github from './images/github.png';
import Footer from './components/Footer';


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
          {/* Icons made by https://www.flaticon.com/authors/pixel-perfect */}
          {/* Icons made by https://www.flaticon.com/authors/freepik */}
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

        <AboutPicture src={AboutMePicture}/>

        <AboutText>Hi there! My name is Shaumik Kalwit. I live in San Jose California. 
        I go to Lynbrook High School. In my free time, I enjoy playing basketball, video games, as well as programming
        in my free time. I am fluent in HTML, CSS, and Python. I also have some 
        exposure to JavaScript and React. I am also the Webmaster of the sub chapter of
        AID, known as TeenAIDers. Learn more through my links!</AboutText>
       </Section>

       <div id="Projects"></div>
       <ProjectsSection>

        <Title>Projects</Title>

        <CardFlexbox>
        <CardStyled>
        <Card style={{ width: '20rem' }}>
          <Card.Header><b>Github Stats</b></Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item><b>Total Number of Repositories</b>:<br></br> 3</ListGroup.Item>
            <ListGroup.Item><b>Total Number of Commits</b>:<br></br> 380</ListGroup.Item>
            <ListGroup.Item><b>Total Number of Commits in The Past Year</b>:<br></br> 380</ListGroup.Item>
            <ListGroup.Item><b>Total Number of Commits in The Past Week</b>:<br></br> 25</ListGroup.Item>
            <ListGroup.Item><b>Total Number of Followers</b>:<br></br> 5</ListGroup.Item>
            <ListGroup.Item><a href="https://github.com/shaumikkalwit"><ImgLinksG src={Github}/></a></ListGroup.Item>
          </ListGroup>
        </Card>
        </CardStyled>

        <CardStyled>
        <Card style={{ width: '20rem' }}>
          <Card.Header><b>Projects</b></Card.Header>
          <ListGroup variant="flush">
           
            <ListGroup.Item><b>Lynbrook AID Website</b>: <br></br>Website created for the Lynbrook AID Organization.
            in Lynbrook. <br></br>(JavaScript, HTML, CSS)</ListGroup.Item>

            <ListGroup.Item><b>Guessing Game</b>:<br></br> A guessing game made for you to relax and have fun. <br></br>(Python)</ListGroup.Item>

            <ListGroup.Item><b>GhostWriter</b>: <br></br>Researches and compiles information related to a given topic.
             <br></br>(Python)</ListGroup.Item>

             <ListGroup.Item><a href="https://github.com/shaumikkalwit"><ImgLinksG src={Github}/></a></ListGroup.Item>
          </ListGroup>
        </Card>
        </CardStyled>
        </CardFlexbox>

       </ProjectsSection>

       <Footer>
        <p>Copyright © 2020 shaumikkalwit.</p>
       </Footer>

      </Flexbox>
    </div>
  );
 }
}

export default App;