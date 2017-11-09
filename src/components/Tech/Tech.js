import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import SingleTech from './SingleTech';

import './tech.scss';

const Tech = (props) => {
	const { tech } = props;
	return(
		<div className="Tech">
			{
				map(tech, (singleTech, key) => <SingleTech key={key} {...singleTech} />)
			}
		</div>
	);
};

Tech.propTypes = {
	tech: PropTypes.object
};

export default Tech;