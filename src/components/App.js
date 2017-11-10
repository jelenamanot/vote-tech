import React from 'react';
import { auth, database } from '../firebase';

import Header from './Header/Header';
import SignIn from './SignIn/SignIn';
import CurrentUser from './CurrentUser/CurrentUser';
import NewTech from './NewTech/NewTech';
import Tech from './Tech/Tech';

import './app.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
			tech: null
		};
		this.techRef = database.ref('/tech');
	}

	componentDidMount() {
		// from logged in to logged out & vice versa
		auth.onAuthStateChanged((currentUser) => {
			this.setState({ currentUser });

			this.techRef.on('value', (snapshot) => {
				this.setState({ tech: snapshot.val() });
			});
		});
	}

	render() {
		const { currentUser, tech } = this.state;

		return(
			<div className="App">
				<Header />
				{
					currentUser ? 
						<div>
							<CurrentUser user={currentUser} /> 
							<NewTech />
							<div className="clearfix"></div>
							<Tech tech={tech} currentUser={currentUser} />
						</div>
						: <SignIn />
				}
			</div>
		);
	}
}

export default App;