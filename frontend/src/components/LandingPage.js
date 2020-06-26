import React from 'react';
import styled from 'styled-components';
import Background from "../images/background1.jpg";

const Container = styled.div`

	@media (min-width: 992px) {

		background-position: 50% 69%;
	}

 	background-image: url(${Background});
  	background-repeat: no-repeat;
  	background-attachment: fixed;
  	background-size: cover;
  	background-position: 100% 50%;

	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;	
	align-items: center;
	text-align: center;
	scroll-snap-align: start;

`;

class LandingPage extends React.Component {
	render() {
		return (
			<Container>
				{this.props.children}
			</Container>
		);
	}
}

export default LandingPage;