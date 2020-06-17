import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  	@media (min-width: 992px) {

  	}

  	padding-top: 56px;

  	width: 100vw;
	height: auto;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;	
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