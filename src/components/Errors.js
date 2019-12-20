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

const Message = styled.p`
	color: ${(props) => (props.red ? '#FF0000' : '#00ff00')};
`;

const Input = styled.input`
	margin-right: .5rem;
	width: 10rem;
	height: 2rem;
	border: .5px solid #c7c7c7;
	border-radius: 6px;
`;

const Button = styled.button`
	width: 10rem;
	height: 2.2rem;
	background-color: #BFFFD1;
	border: transparent;
	border-radius: 6px;
	cursor: pointer;
`;

class Errors extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			lastName: '',
			password: '',
			error: undefined,
			sucessMessage: false,
		}
	}

	handleName = event => {
		this.setState({ name: event.target.value });
	}

	
	/* 
		modo de mudar o valor de um input de forma reutilizável 
		handleChange = event => {
    	this.setState({
      [event.target.name]: event.target.value
    	});
  	}; */

 	handleLastName = event => {
		this.setState({ lastName: event.target.value });
	}

	handlePassword = event => {
		this.setState({ password: event.target.value });
	}

	handleSubmit = event => {
		event.preventDefault();

		if(this.state.password.trim().length > 5) {
			this.setState({ sucessMessage: true })
		}
		else {
			this.setState({ error: 'errorPassword' });
		}
	}
	
	renderError = () => {
		if (this.state.error === 'errorPassword') {
			return <Message red>Password must be at least 5 characters.</Message>
		}
	}

	renderSucessMessage = () => <Message> Your data has been sent successfully! :)</Message>

	renderForm = () => {
		return (
			<form onSubmit={this.handleSubmit}>
				<Input
					type="text"
					value={this.state.name}
					onChange={this.handleName}
					placeholder="Name"
					required
					error={this.state.error}
				/>
				<Input
					type="text"
					value={this.state.lastName}
					onChange={this.handleLastName}
					placeholder="Last Name"
					required
					error={this.state.error}
				/>
				<Input
					type="password"
					value={this.state.password}
					onChange={this.handlePassword}
					placeholder="Password"
					required
					error={this.state.error}
				/>
				<Button>Submit</Button>
			</form>
		);
	}

  render() {
    return (
			<Container>
				<Text blue>Errors component</Text>
        { this.renderForm() }
				{ this.renderError() }
				{ this.state.sucessMessage && this.renderSucessMessage() }
        <Text blue>Errors component</Text>
			</Container>
    )
  }
}

export default Errors;
