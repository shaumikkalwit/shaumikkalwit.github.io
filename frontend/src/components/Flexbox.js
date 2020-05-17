import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;

    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    display: flex;

	display: flex;
	flex-direction: column;
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