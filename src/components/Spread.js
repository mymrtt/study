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

const ContainerSecond = styled.div`
  display: flex;
  flex-direction: column;
`;

class Spread extends Component {

  // push function with spread
  firstExample = () => {
    const a = ['uva', 'morango', 'limão'];
    const b = ['melancia', 'melão'];
    a.push(...b)

    return a.join(", ");
  }

  // split function with spread
  secondExample = () => {
    const a = 'abobora';
    const b = [...a];

    console.log('secondSpreadExample', b)

    return b;
  }

  // params function simple
  thirdExample = () => {
    const colors = ['yellow', 'green', 'pink'];
    console.log('thirdSpreadExample', ...colors);

    return colors.join(", ");
  }

  render() {
    return(
      <Container>
				<Text blue>Spread component</Text>
        { this.firstExample() }
        <ContainerSecond>
          { this.secondExample() }
        </ContainerSecond>
        {this.thirdExample()}
        <Text blue>Spread component</Text>
			</Container>
    );
  }
}


export default Spread;