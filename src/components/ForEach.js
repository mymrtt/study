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

class ForEach extends Component {
  constructor(props){
    super(props);

    this.state = {
      values: [ 1, 2, 3, 4 ]
    }
  }

  renderForEach = () => {
    this.state.values.forEach((i, el) => {
      if(el === 1) {
        /* this.state.values[i] = 'teste';
        this.setState({ values: this.state.values});
        console.log(this.state.values); */

        /* ou */

        /* this.setState({ 
          ...this.state.values[this.state.values[i] = 'olha'] 
        }); */

        /* console.log(this.state.values[i]); */
      }
    });
  }

  render() {
    return(
      <Container>
				<Text blue>ForEach component</Text>
        { this.renderForEach() }
        <Text>*codigo comentado*</Text>
        <Text blue>ForEach component</Text>
			</Container>
    );
  }
}

export default ForEach;
