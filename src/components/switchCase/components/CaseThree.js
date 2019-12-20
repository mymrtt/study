// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 1rem;
  margin-bottom: 3rem;
`;

const Text = styled.p`
  margin-right: ${(props) => (props.marginRight ? '.5rem' : '0')};
  color: ${(props) => (props.blue ? '#0000ff' : '#000')};
`;

const Button = styled.button`
	width: 10rem;
	height: 2.5rem;
	background-color: #BFFFD1;
	border: transparent;
	border-radius: 6px;
	cursor: pointer;
`;

class CaseThree extends Component {
  render() {
    return (
			<Container>
				<Text>this is CaseThree</Text>
				<Button onClick={this.props.screenOne}>back to render initial</Button>
			</Container>
		);
  }
}

export default CaseThree;
