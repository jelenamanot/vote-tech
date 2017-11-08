import React from 'react';
import { auth, googleAuthProvider } from '../../firebase';

import './signIn.scss';

class SignIn extends React.Component {
	render() {
		return(
			<div className="SignIn">
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