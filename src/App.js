// Libs
import React from 'react';
import styled from 'styled-components';

// Components
import Map from './components/Map';
import Filter from './components/Filter';
import Conditionals from './components/Conditionals';
import TemplateString from './components/TemplateString';
import SwitchCase from './components/switchCase/index';
import Loops from './components/Loops';
import ForEach from './components/ForEach';
import Find from './components/Find';
import Parameter from './components/Parameter';
import Inputs from './components/Inputs';
import Errors from './components/Errors';

const Container = styled.div`
  margin: 3rem 10rem;
`;

function App() {
  return (
    <Container>
      <Map />
      <Filter />
      <Conditionals />
      <TemplateString />
      <SwitchCase />
      <Loops />
      <ForEach />
      <Find />
      <Parameter />
      <Inputs />
      <Errors />
    </Container>
  );
}

export default App;
