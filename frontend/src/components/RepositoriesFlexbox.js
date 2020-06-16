import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

  	@media (min-width: 992px) {

  		width: 90vw;
		height: auto;

  		display: flex;
  		align-items: flex-end;
  		justify-content: flex-start;

  	}

	display: flex;
	flex-direction: column;
	justify-content: flex-start;	
	align-items: center;

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