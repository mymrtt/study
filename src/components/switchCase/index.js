// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import CaseOne from './components/CaseOne';
import CaseTwo from './components/CaseTwo';
import CaseThree from './components/CaseThree';

const Container = styled.div`
  padding: 0 1rem;
  margin-bottom: 3rem;
  border: 1px solid #c7c7c7;
`;

const Text = styled.p`
  margin-right: ${(props) => (props.marginRight ? '.5rem' : '0')};
  color: ${(props) => (props.blue ? '#0000ff' : '#000')};
`;

const ContainerInitial = styled.div`
  display: flex; 
  flex-direction: column;
	align-items: center;
`;

const Button = styled.button`
	width: 10rem;
	height: 2.5rem;
	background-color: #BFFFD1;
	border: transparent;
	border-radius: 6px;
	cursor: pointer;
`;

class switchCase extends Component {
	constructor(props){
		super(props);
		this.state = {
			currentScreen: 'index',
		};
	}

	handleCurrent = () => {
		if(this.state.currentScreen !== 'index') {
			this.setState({ currentScreen: 'index' });
		}
	}

	handleCaseOne = () => {
		if(this.state.currentScreen !== 'caseOne') {
			this.setState({ currentScreen: 'caseOne' });
		}
	}

	handleCaseTwo = () => {
		if(this.state.currentScreen !== 'caseTwo') {
			this.setState({ currentScreen: 'caseTwo' });
		}
	}

	handleCaseThree = () => {
		if(this.state.currentScreen !== 'caseThree') {
			this.setState({ currentScreen: 'caseThree' });
		}
	}

	renderSwitch = () => {
		switch (this.state.currentScreen) {
			case "index": 
				return this.renderInitial();
			case "caseOne":
				return <CaseOne screenTwo={this.handleCaseTwo} />
			case "caseTwo":
				return <CaseTwo screenThree={this.handleCaseThree} />
			case "caseThree":
				return <CaseThree screenOne={this.handleCurrent} />
			default:
				return this.renderInitial();
		}
	}

	renderInitial = () => (
		<ContainerInitial>
			<Text>initial render!!!!!!!!!</Text>
			<Button onClick={this.handleCaseOne}>go to case one</Button>
		</ContainerInitial>
	)
	
  render() {
    return (
			<Container>
				<Text blue>Switch case component</Text>
				{ this.renderSwitch() }
				<Text blue>Switch case component</Text>
			</Container>
    );
  }
}

export default switchCase;
