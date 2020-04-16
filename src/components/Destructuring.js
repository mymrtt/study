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

class Destructuring extends Component {

  firstExample = () => {
    let user = {};
    [user.name, user.surname, user.age] = "Yasmin Miranda 19".split(' ');

    console.log('firstDestructuringExample', user)
  }

  render() {
    return(
      <Container>
				<Text blue>Destructuring component</Text>
        { this.firstExample() }
        <Text blue>Destructuring component</Text>
			</Container>
    );
  }
}


export default Destructuring;