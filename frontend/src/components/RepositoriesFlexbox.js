import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  	@media (min-width: 992px) {

  		width: 80vw;
		height: auto;

  		display: flex;
  		align-items: flex-end;

  	}

	display: flex;
	flex-direction: column;
	justify-content: flex-start;	
	align-items: center;
	text-align: center;

`;

class RepositoriesFlexbox extends React.Component {
	render() {
		return (
			<Container>
				{this.props.children}
			</Container>
		);
	}
}

export default RepositoriesFlexbox;