import React from 'react';
import styled from 'styled-components';

const AboutText = styled.p`
	@media (min-width: 992px) {

		font-size: 1.3vw;

		padding-left: 22vw;
  	padding-right: 22vw;
	}

	@media only screen and (device-width: 768px) {

		font-size: 3.4vw;

		padding-left: 10vw;
  	padding-right: 10vw;

	}

	color: #FFDBDB;

	font-size: 4.25vw;

	padding-right: 10px;
	padding-left: 10px;

	font-family: "Courier New", Courier, monospace;


`;

export default AboutText;
