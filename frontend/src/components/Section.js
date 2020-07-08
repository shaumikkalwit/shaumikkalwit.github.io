import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

	width: 100vw;
	height: 100vh;

	background-color: #1B1B1E;

	padding-top: 56px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;	
	align-items: center;
	text-align: center;
	scroll-snap-align: start;

`;

class Section extends React.Component {
	render() {
		return (
			<Container>
				{this.props.children}
			</Container>
		);
	}
}

export default Section;