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

class DinamicObject extends Component {

	renderComplexDinamic = () => {
		const dynamicName = 'name';
		const dynamicAge = 'age';
		
		const datas = [
			{
				[dynamicName]: 'yasmin',
				[dynamicAge]: 18,
			},
			{
				[dynamicName]: 'Dheni',
				[dynamicAge]: 20,
			},
			{
				[dynamicName]: 'Theo',
				[dynamicAge]: 1,
			}
		];

		console.log('ComplexDinamicObject', datas);

		datas.map(data => {
			return (
				<div>
					<p>{data.dynamicName}</p>
					<p>{data.dynamicAge}</p>
				</div>
			)
		})
	}

	renderSimpleDinamic = () => {
		const dynamic = 'food';

		const data = {
			name: 'yasmin',
			age: 18,
			[dynamic]: 'pizza',
		};
		console.log('SimpleDinamicObject', data);
	}

  render() {
    return(
      <Container>
				<Text blue>Dinamic Object component</Text>
        { this.renderSimpleDinamic() }
				{ this.renderComplexDinamic() }
				<Text>*open console*</Text>
        <Text blue>Dinamic Object component</Text>
			</Container>
    );
  }
}

export default DinamicObject;
