import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;

	padding-top: 56px;

	scroll-snap-align: start;


`;

class FirstScreen extends React.Component {
	render() {
		return (
			<Container>
				{this.props.children}
			</Container>
		);
	}
}

export default FirstScreen;