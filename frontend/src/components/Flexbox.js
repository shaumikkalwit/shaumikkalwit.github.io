import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

	display: flex;
	flex-direction: column;

	width: 100vw;

`;

class Flexbox extends React.Component {
	render() {
		return (
			<Container>
				{this.props.children}
			</Container>
		);
	}
}

export default Flexbox;