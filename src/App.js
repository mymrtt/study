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
import For from './components/For';
import ForEach from './components/ForEach';
import While from './components/While';
import Find from './components/Find';
import Parameter from './components/Parameter';
import Inputs from './components/Inputs';
import Errors from './components/Errors';
import Ternary from './components/Ternary';
import FillArrays from './components/FIllArrays';
import UniqueArrays from './components/UniqueArrays';
import DinamicObject from './components/DinamicObject';
import Spread from './components/Spread';
import Destructuring from './components/Destructuring';

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
      <For />
      <ForEach />
      <While />
      <Find />
      <Parameter />
      <Inputs />
      <Errors />
      <Ternary />
      <FillArrays />
      <UniqueArrays />
      <DinamicObject />
      <Spread />
      <Destructuring />
    </Container>
  );
}

export default App;
