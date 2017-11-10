import React from 'react';
import map from 'lodash/map';

import './singleTech.scss';

const SingleTech = (tech) => {
	const { name, votes, currentUser, handleSelect, handleDeselect } = tech;
	const userHasVoted = votes && Object.keys(votes).includes(currentUser.uid);

	return(
		<div className="SingleTech">
			<p>{ name }</p>
			<hr />
			<ul>
				{
					votes && map(votes, (vote,key) => <li key={key}>{vote}</li>)
				} 
			</ul>
			{
				userHasVoted ?
					<button 
						onClick={handleDeselect}
						className="btnUnvote"
					>
						&times;
					</button>
					:
					<button 
						onClick={handleSelect}
						className="btnVote"
					>
						+
					</button>
			}
		</div>
	);
};

export default SingleTech;