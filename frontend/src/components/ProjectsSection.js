import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  	@media (min-width: 992px) {

  	}

  	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;	
	align-items: center;
	text-align: center;

	background-color: black;

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