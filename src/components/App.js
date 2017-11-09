import React from 'react';
import { auth } from '../firebase';

import Header from './Header/Header';
import SignIn from './SignIn/SignIn';
import CurrentUser from './CurrentUser/CurrentUser';

import './app.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}

	componentDidMount() {
		// from logged in to logged out & vice versa
		auth.onAuthStateChanged((currentUser) => {
			this.setState({ currentUser });
		});
	}

	render() {
		const { currentUser } = this.state;

		return(
			<div className="App">
				<Header />
				{
					currentUser ? <CurrentUser user={currentUser} /> : <SignIn />
				}
			</div>
		);
	}
}

export default App;