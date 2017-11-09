import React from 'react';

import './tech.scss';

const SingleTech = (tech) => {
	const { name } = tech;
	return(
		<div className="SingleTech">
			<p>{ name }</p>
		</div>
	);
};

export default SingleTech;