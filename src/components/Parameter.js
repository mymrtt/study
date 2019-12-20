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

const ContainerColors = styled.div`
	display: flex;
`;

const WrapperColor = styled.div`
  margin: 1rem;
	width: 4rem;
	height: 4rem;
	background-color: ${(props) => props.backgroundColor};
	border-radius: 50%;
	cursor: pointer;
`;

const Button = styled.button`
	margin-right: 1rem;
	width: 10rem;
	height: 2.5rem;
	background-color: #BFFFD1;
	border: transparent;
	border-radius: 6px;
	cursor: pointer;
`;

class Parametro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: [
				'#c7c7c7',
				'#d3d3',
				'#f0f',
				'#e3c',
				'#bfbf',
				'#ffff00'
			],
			selectedColor: '',
		}
	}

	handleColor = (color) => {
		console.log(color);
		this.setState({ selectedColor: color })
	}		

	renderColor = () => (
		this.state.colors.map((color) => {
			return (
				<WrapperColor
					backgroundColor={color}
					key={color}
					onClick={() => this.handleColor(color)}
				>
				</WrapperColor>
			)
		})
	)

	handleButtonFuc = (text) => (
		<Button>{text}</Button>
	)

  render() {
    return (
			<Container>
				<Text blue>Parameter component</Text>
				{this.handleButtonFuc('hello')}
				{this.handleButtonFuc('world')}
				<ContainerColors>
					<span>---------------------</span>
					{this.renderColor()}
				</ContainerColors>
				<Text blue>Parameter component</Text>
			</Container>
    );
  }
}

export default Parametro;
