// Libs
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

class While extends Component {

  renderWhile = () => {
		let value = 0;
		while(value < 4) {
			console.log('while component', value);
			value ++;
		}
  }

  render() {
    return(
      <Container>
				<Text blue>While component</Text>
        { this.renderWhile() }
        <Text>*console*</Text>
        <Text blue>While component</Text>
			</Container>
    );
  }
}

export default While;
