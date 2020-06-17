import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  	@media (min-width: 992px) {

  		display: flex;
		flex-direction: row;
		justify-content: space-around;

  	}

	display: flex;
	flex-direction: column;
	justify-content: space-around;	
	align-items: center;
	text-align: center;

`;

class CardFlexbox extends React.Component {
	render() {
		return (
			<Container>
				{this.props.children}
			</Container>
		);
	}
}

export default CardFlexbox;