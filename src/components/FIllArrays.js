import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 1rem;
  margin-bottom: 3rem;
  border: 1px solid #c7c7c7;
`;

const Text = styled.p`
  margin-right: ${(props) => (props.marginRight ? '.5rem' : '0')};
  color: ${(props) => (props.blue ? '#0000ff' : '#000')};
`;

class FillArrays extends Component {

  renderArray = () => {
		const number = Array(5).fill(2);
		console.log('fillArray', number);
  }

  render() {
    return (
			<Container>
				<Text blue>Fill Arrays component</Text>
				{ this.renderArray() }
				<Text>*open console*</Text>
				<Text blue>Fill Arrays component</Text>
			</Container>
    );
  }
}

export default FillArrays;
