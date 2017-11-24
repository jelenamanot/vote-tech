import React from 'react';
import { database } from '../../firebase';
import './newTech.scss';

class NewTech extends React.Component {
	constructor() {
		super();
		this.state = {
			name: ''
		};

		this.techRef = database.ref('/tech');
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(event) {
		event.preventDefault();
		this.techRef.push({ name: this.state.name });
	}

	render() {
		const { name } = this.state;
		return(
			<form className="NewTech"> 
				<h2>Enter some tech for users to vote for</h2>
				<input 
					type="text"
					value={ name }
					onChange={ (event) => this.setState({ name: event.target.value }) }
					placeholder="Tech name"
					className="techInput"
				/>
				<button
					onClick={this.handleSubmit}
					className="btn submitBtn"
					disabled={!name}
				>
					Submit
				</button>
			</form>
		);
	}
}

export default NewTech;