import React, {  Fragment } from 'react';
import { render } from 'react-dom';
import { Link, Route } from 'wouter';

import Home from './pages/home/Home';
import AboutPage from './About';

import './index.css';

function NotFound() {
	return <p>404 Not Found</p>;
}


const Shell = () => {
	return (
		<Fragment>
			<Route path="/">
				<Home />
			</Route>
			{/* <Route path="about" component={AboutPage} /> */}
		</Fragment>
	);
};

render(<Shell />, document.getElementById('root'));
