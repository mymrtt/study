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

class TemplateString extends Component {

  renderOperador = () => {
    const value1 = 'yasmin';
    const value2 = 'miranda';
    const juntos = `ola meu nome é ${value1} ${value2}`;

    return ( juntos );
  }

  render() {
    return (
			<Container>
				<Text blue>Template string component</Text>
				{ this.renderOperador() }
				<Text blue>Template string component</Text>
			</Container>
    );
  }
}

export default TemplateString;
