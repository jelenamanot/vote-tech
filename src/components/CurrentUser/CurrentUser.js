import React from 'react';
import PropTypes from 'prop-types';
import { auth } from '../../firebase';

import './currentUser.scss';

const CurrentUser = ({ user }) => {
	return(
		<div className="CurrentUser">
			<div className="photoWrap">
				<img 
					src={user.photoURL}
					className="userPhoto"
					alt={user.displayName}
				/>
			</div>
			<div className="userId">
				<h4>{user.displayName}</h4>
				<p>{user.email}</p>
				<button 
					onClick={ () => auth.signOut() }
					className="btn"
				>
					Sign Out
				</button>
			</div>
		</div>
	);
};

CurrentUser.propTypes = {
	user: PropTypes.object,
	displayName: PropTypes.string,
	email: PropTypes.string,
	photoURL: PropTypes.string
};

export default CurrentUser;