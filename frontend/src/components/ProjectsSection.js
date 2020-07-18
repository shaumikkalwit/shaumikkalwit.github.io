import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  	@media (min-width: 992px) {

  		padding-bottom: 56px;

  	}

  	padding-top: 56px;

  	width: 100vw;
  	height: auto;

  	display: flex;
  	flex-direction: column;
  	justify-content: flex-start;
  	text-align: center;
  	scroll-snap-align: start;

  	background-color: #1B1B1E;

`;

class ProjectsSection extends React.Component {
	render() {
		return (
			<Container>
				{this.props.children}
			</Container>
		);
	}
}

export default ProjectsSection;
