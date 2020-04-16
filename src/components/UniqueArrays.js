// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 1rem;
  margin-bottom: 3rem;
  border: 1px solid #c7c7c7;
`;

const Text = styled.p`
  color: ${(props) => (props.blue ? '#0000ff' : '#000')};
`;

class UniqueArray extends Component {

	renderUniqueArray = () => {
		const names = ['Gabriel', 'Théo', 'Bernardo', 'Dheniffe', 'Théo'];

		const unique = Array.from(new Set(names));

		console.log('UniqueArrays', unique);
	}

  render() {
    return(
      <Container>
				<Text blue>Unique Array component</Text>
        { this.renderUniqueArray() }
				<Text>Essa é uma forma de: caso em uma lista, uma palavra se repita, ele fará com que a palavra que foi repetida, não apareça duas vezes na lista.</Text>
				<Text>*open console*</Text>
        <Text blue>Unique Array component</Text>
			</Container>
    );
  }
}

export default UniqueArray;
