import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  	@media (min-width: 992px) {

  		padding: 0;

  	}

    @media only screen and (device-width: 768px) {

    }

  	padding-bottom: 56px;

`;

class CardStyled extends React.Component {
	render() {
		return (
			<Container>
				{this.props.children}
			</Container>
		);
	}
}

export default CardStyled;
