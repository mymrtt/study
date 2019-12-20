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

export default class Loops extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0,
    }
  }

/*   handleWhile = () => {
    let { number } = this.state;

    while(number < 10) {
      this.setState({ number: number++});
      console.log('number while', number);
    }
  }

  handleFor = () => {
    for(let num = 0; num < 10; num++) {
      console.log('num for', num);
    }
  } */

  render() {
    return (
			<Container>
				<Text blue>Loops component</Text>
        <Text>*codigo comentado*</Text>
        {/* { this.handleWhile() }
        { this.handleFor() } */}
        <Text blue>Loops component</Text>
			</Container>
    );
  }
}
