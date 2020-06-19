import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  	@media (min-width: 992px) {

  		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-start;

		margin-top: 8vh;
		margin-right: 20vw;
		margin-left: 20vw;

  	}

	display: flex;
	flex-direction: column;
	justify-content: center;	
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