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

class For extends Component {
	constructor(props){
		super(props);

		this.state = { 
			list: [
				'reactjs',
				'javascript',
				'react native',
				'html',
				'css'
			]
		}
	}

	renderFor = () => {
		for(let i = 0; i < this.state.list.length; i++) {
			/* console.log('for component', this.state.list[i]); */

			let list = this.state.list[i];
			let text = `teste1 ${list} teste2`;
			console.log('for component', text);
		}
	}

  render() {
    return(
      <Container>
				<Text blue>For component</Text>
					{ this.renderFor() }
				<Text>***console***</Text>
        <Text blue>For component</Text>
			</Container>
    );
  }
}

export default For;
