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

const ContainerList = styled.div`
  display: flex; 
  flex-direction: row; 
`;

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          'name': 'yasmin',
          'age': 18,
          'city': 'rio',
        },
        {
          'name': 'dheniffe',
          'age': 20,
          'city': 'rio',
        },
        {
          'name': 'theo',
          'age': 1,
          'city': 'sp',
        },
        {
          'name': 'aroldo',
          'age': 5,
          'city': 'sp',
        }
      ]
    }
  }

  renderFilter = () => {
    return this.state.list.filter(item => item.city === 'sp').map ((item, index) => {
      return (
        <ContainerList
          key={index}  
        >
          <Text marginRight>{item.name}</Text>
          <Text marginRight>{item.age}</Text>
          <Text marginRight>{item.city}</Text>
        </ContainerList>
      )
    })
  }

  render() {
    return (
			<Container>
				<Text blue>Filter component</Text>
        { this.renderFilter() }
        <Text blue>Filter component</Text>
			</Container>
    );
  }
}

export default Filter;
