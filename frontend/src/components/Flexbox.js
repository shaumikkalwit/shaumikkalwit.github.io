import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

	width: 100vw;

	display: flex;
	flex-direction: column;

	overflow-x: hidden;
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