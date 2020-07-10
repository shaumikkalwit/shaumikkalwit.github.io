import React, { Component, Fragment } from 'react';
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
import AboutMePicture from './images/aboutpicture.jpg';
import Title from './components/Title';
import ImgLinks from './components/ImgLinks';
import ImgLinksG from './components/ImgLinksG';
import Facebook from './images/facebook (1).png';
import Github from './images/github.png';
import Footer from './components/Footer';
import Instagram from './images/instagram.png';


class App extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      statsYearly: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://api.github.com/users/shaumikkalwit/repos')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });

    fetch('https://api.github.com/repos/shaumikkalwit/TeenAIDers-Website/stats/commit_activity')
      .then(res => res.json())
      .then(json => {
        var sumY = 0;
        for (var i = 0; i < json.length; i++) {
          var week = json[i];
          sumY += week["total"];
        }
        this.setState({
          statsYearly: sumY,
        })
      }); 
  
  }

  render() {
    var { isLoaded, items, statsYearly } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {

    }
      return (
      <div>
       <div id="LandingPage"></div>
        <Navbar bg="dark" variant="dark" expand="lg" position="sticky" fixed="top">
          <Navbar.Brand style={{ color: '#8EF9F3' }} href="#LandingPage"><b>shaumikkalwit</b></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{ color: '#FCC8C2' }} href="#AboutUs" ><b>About Me</b></Nav.Link>
            <Nav.Link style={{ color: '#FCC8C2' }} href="#Projects"><b>Projects</b></Nav.Link>
          </Nav>
          <div class="icons">
            {/* Icons made by https://www.flaticon.com/authors/pixel-perfect */}
            {/* Icons made by https://www.flaticon.com/authors/freepik */}
            {/* Icons made by https://www.flaticon.com/authors/pixel-perfect */}
            <a href="https://github.com/shaumikkalwit"><ImgLinks src={Github}/></a>  
            <a href="https://www.facebook.com/shaumik.kalwit/"><ImgLinks src={Facebook}/></a>
            <a href="https://www.instagram.com/shaumikkalwit/"><ImgLinks src={Instagram}/></a>
           </div>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>

         <Flexbox>
          <LandingPage>
           <HomeTitle><b>Shaumik</b></HomeTitle>
           <HomeTitle><b>Kalwit</b></HomeTitle>

           <Scroll>Scroll to learn more.</Scroll>
          </LandingPage>

         <div id="AboutUs"></div>
         <Section>

          <Title>About Me</Title>

          <AboutPicture src={AboutMePicture}/>

          <AboutText>Hi there! My name is Shaumik Kalwit. I live in San Jose, California. 
          I go to Lynbrook High School. In my free time, I enjoy playing basketball, video games, and programming. 
          I am fluent in HTML, CSS. I also have some exposure to JavaScript and React JS. I am also learning Python.
          Learn more through my links!</AboutText>
         </Section>

         <div id="Projects"></div>
         <ProjectsSection>

          <Title>Projects</Title>

          <CardFlexbox>
          <CardStyled>
          <Card style={{ width: '20rem' }}>
            <Card.Header style={{ background: '#FCC8C2' }}><b>Github Stats</b></Card.Header>
            <ListGroup variant="flush">

              <ListGroup.Item style={{ background: '#FCC8C2' }}>
                <b>Total Number of Commits in the Past Year:</b><br></br> {statsYearly}
              </ListGroup.Item>

              <ListGroup.Item style={{ background: '#FCC8C2' }}><b>Total Number of Commits</b>:<br></br> 380</ListGroup.Item>
              <ListGroup.Item style={{ background: '#FCC8C2' }}><b>Total Number of Commits in The Past Year</b>:<br></br> 380</ListGroup.Item>
              <ListGroup.Item style={{ background: '#FCC8C2' }}><b>Total Number of Commits in The Past Week</b>:<br></br> 25</ListGroup.Item>
              <ListGroup.Item style={{ background: '#FCC8C2' }}><b>Total Number of Followers</b>:<br></br> 5</ListGroup.Item>
              <ListGroup.Item style={{ background: '#FCC8C2' }}><a href="https://github.com/shaumikkalwit"><ImgLinksG src={Github}/></a></ListGroup.Item>
            </ListGroup>
          </Card>
          </CardStyled>

          <CardStyled>
          <Card style={{ width: '20rem' }}>
            <Card.Header style={{ background: '#FCC8C2' }}><b>Projects</b></Card.Header>
            <ListGroup variant="flush">
             
              {items.map(item => (
                <ListGroup.Item style={{ background: '#FCC8C2' }} key={item.id}>
                  <b>{item.name}</b>:<br></br> {item.description}<br></br> <i>{item.language}</i>
                </ListGroup.Item>
              ))}

                <ListGroup.Item style={{ background: '#FCC8C2' }}><a href="https://github.com/shaumikkalwit"><ImgLinksG src={Github}/></a></ListGroup.Item>

            </ListGroup>
          </Card>
          </CardStyled>
          </CardFlexbox>

         </ProjectsSection>

         <Footer>
          <p style={{ color: '#FCC8C2' }}>Copyright © 2020 Shaumik Kalwit.</p>
         </Footer>

        </Flexbox>
      </div>
  );
 }
}

export default App;