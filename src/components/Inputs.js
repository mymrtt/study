// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

//Images
import magnifyingGlass from '../assets/lupa.png';

const Container = styled.div`
  padding: 0 1rem;
  margin-bottom: 3rem;
  border: 1px solid #c7c7c7;
`;

const Text = styled.p`
  margin-right: ${(props) => (props.marginRight ? '.5rem' : '0')};
  font-size: 1rem;
  color: ${(props) => (props.blue ? '#0000ff' : '#000')};
`;

const InputFake = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
`;

const ContainerInput = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  position: relative;
	width: 100%;
  height: 2rem;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  background: #fff;
`;

const Image = styled.img`
  position: absolute;
  right: 12rem;
  width: 25px;
  height: 25px;
`;

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isOpen: false,
    }
	}
	
	handleInputFake = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}

	handleInput = (event) => {
		this.setState({ value: event.target.value })
	}

  renderInput = () => {
    return (
      <ContainerInput>
        <Text>Pesquise aqui...</Text>
        <Input 
          value={this.state.value} 
          onChange={this.handleInput} 
          placeholder="Digite aqui"   
        />
        <Image src={magnifyingGlass} alt="magnifying glass" />
      </ContainerInput>
    )
  }

  render() {
    return (
			<Container>
        <Text blue>Input component</Text>
        <ContainerInput>
          <InputFake onClick={this.handleInputFake} />
          <Image src={magnifyingGlass} alt="magnifying glass" />
        </ContainerInput>
        { this.state.isOpen && this.renderInput() }
        <Text blue>Input component</Text>
      </Container>
    );
  }
}

export default Inputs;
