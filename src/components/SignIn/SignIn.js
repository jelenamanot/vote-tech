import React from 'react';
import { auth, googleAuthProvider } from '../../firebase';

import './signIn.scss';

class SignIn extends React.Component {
	render() {
		return(
			<div className="SignIn">
				<h1>Please sign in</h1>
				<h2>Google account is needed</h2>
				<button 
					onClick={ () => auth.signInWithPopup(googleAuthProvider) }
					className="btn"
				>
					Sign In
				</button>
			</div>
		);
	}
}

export default SignIn;