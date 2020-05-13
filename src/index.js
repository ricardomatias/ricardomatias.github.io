import React, {  Fragment } from 'react';
import { render } from 'react-dom';
import { Link, Route } from 'wouter';

import Home from './pages/home/Home';
import DashedFigures from './pages/sketches/DashedFigures';

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
			<Route path="/dashed-figures" component={DashedFigures} />
		</Fragment>
	);
};

render(<Shell />, document.getElementById('root'));
