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

class Ternary extends Component {

	renderComplexTernary = () => {
		const age = 17;

		age > 17
			? age > 30
				? console.log('você está um pouco velho')
				: console.log('você está quase na meia idade')
		: console.log('ComplexTernary', 'você ainda é um adolescente')
	}

	renderSimpleTernary = () => {
		const name = 'yasmin';

		name === 'yasmin' ? console.log('SimpleTernary', 'good!') : console.log('this is not the correct value');
	}

  render() {
    return(
      <Container>
				<Text blue>Ternary component</Text>
        { this.renderSimpleTernary() }
				<Text>*open console*</Text>
				{ this.renderComplexTernary() }
        <Text blue>Ternary component</Text>
			</Container>
    );
  }
}

export default Ternary;
