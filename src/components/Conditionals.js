// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Image
import casalzinho from '../assets/casalzinho.png';

const Container = styled.div`
  padding: 0 1rem;
  margin-bottom: 3rem;
  border: 1px solid #c7c7c7;
`;

const Text = styled.p`
  margin-right: ${(props) => (props.marginRight ? '.5rem' : '0')};
  color: ${(props) => (props.blue ? '#0000ff' : '#000')};
`;

const ContainerList = styled.div`
  display: flex; 
  flex-direction: row; 
`;

const Image = styled.img`
	width: 20%;
`;

const Button = styled.button`
	width: 10rem;
	background-color: #BFFFD1;
	border: transparent;
	border-radius: 6px;
	cursor: pointer;
`;

class Condicionais extends Component {
	constructor(props){
		super(props);
		this.state = {
			isOpen: false,
		}
	}

	handleisOpenCondicional = () => {
		this.setState({ isOpen: true });
	}

	renderCondicionalBoladona = () => {
		if(this.handleisOpenCondicional) {
			return (
				<ContainerList>
					<Text style={{ fontSize: '2rem'}}>olá, mundo! :)</Text>
				</ContainerList>
			)
		} return (
			<Text>olá, pessoa!</Text>
		)
	}

	handleOpen = () => {
		this.setState({ isOpen: !this.state.isOpen });
	}

	renderImage = () => (
		<ContainerList>
			<Text marginRight>modal do casalzinho aberto</Text>
			<Image src={casalzinho} alt="Bubbline" />
		</ContainerList>
	)

  render() {
    return (
			<Container>
				<Text blue>Conditionals component</Text>
				{ this.renderCondicionalBoladona() }
				<Button onClick={this.handleOpen}>{ this.state.isOpen === false ? <Text>abrir modal</Text> : <Text>fechar modal</Text> }</Button>
				{ this.state.isOpen
					? this.renderImage()
					: <Text>modal do casalzinho fechado</Text>
				}
				<Text blue>Conditionals component</Text>
			</Container>
    );
  }
}

export default Condicionais;
