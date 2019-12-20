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

const Button = styled.button`
	width: 10rem;
	height: 2.5rem;
	background-color: #BFFFD1;
	border: transparent;
	border-radius: 6px;
	cursor: pointer;
`;

class Find extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          'comida': 'bolo',
          'bebida': 'suco',
          'city': 'rio',
        },
        {
          'comida': 'queijo-quente',
          'bebida': 'coca-cola',
          'city': 'minas',
        },
        {
          'comida': 'pizza',
          'bebida': 'suco',
          'city': 'sp',
        },
        {
          'comida': 'lasanha',
          'bebida': 'guanará antártica',
          'city': 'brasilia',
        }
			],
			isFind: false,
    }
	}
	
	
/* This method is usually used to edit something, such as editing a task from a todo list */

  renderFindSec = () => {
    const numbers = [1, 6, 10, 20, 14];

    const sec = numbers.find((el) => {
      return el > 6;
    });
    console.log(sec); 
  }


	handleFindItem = () => {
		const find = this.state.list.find( item => item.city === 'brasilia')
		console.log(find);
	}


  renderFind = () => {
    return this.state.list.map ((item, index) => {
      return (
        <div key={index}>
          <Text>{item.name}</Text>
          <Text>{item.bebida}</Text>
          <Text>{item.city}</Text>
        </div>
      )
    })
  }

  render() {
    return (
			<Container>
				<Text blue>Find component</Text>
        { this.renderFind() }
        { this.renderFindSec() }
				<Button onClick={this.handleFindItem}>find</Button> 
        <Text style={{color: 'red'}}>*open console*</Text>
        <Text blue>Find component</Text>
			</Container>
    );
  }
}

export default Find;
