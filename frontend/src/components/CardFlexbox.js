import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  	@media (min-width: 992px) {

  		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-start;

		padding-top: 8vh;
		margin-right: 20vw;
		margin-left: 20vw;

  	}
  	
  	padding-top: 8vh;

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