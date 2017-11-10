import React from 'react';
import { database } from '../../firebase';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import SingleTech from './SingleTech';

import './tech.scss';

class Tech extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSelect = (key) => {
		const { currentUser } = this.props;
		database.ref('/tech')
			.child(key)
			.child('votes')
			.child(currentUser.uid)
			.set(currentUser.displayName);
	}

	handleDeselect = (key) => {
		const { currentUser } = this.props;
		database.ref('/tech')
			.child(key)
			.child('votes')
			.child(currentUser.uid)
			.remove();
	}
	
	render() {
		const { tech, currentUser } = this.props;
		return(
			<div className="Tech">
				{
					map(tech, (singleTech, key) => {
						return <SingleTech 
							key={key} 
							{...singleTech}
							currentUser={currentUser}
							handleSelect={() => this.handleSelect(key)}
							handleDeselect={() => this.handleDeselect(key)}
						/>;
					})
				}
			</div>
		);
	}
};

Tech.propTypes = {
	tech: PropTypes.object,
	currentUser: PropTypes.object
};

export default Tech;