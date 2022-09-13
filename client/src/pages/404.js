import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<main className="container">
			<p className="text">Ooooops! Page not existing</p>
			<Link to={'/'} className="link">
				← Back
			</Link>
		</main>
	);
};

export default NotFound;
