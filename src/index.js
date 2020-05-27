import React, {  Fragment } from 'react';
import { render } from 'react-dom';
import { Link, Route, Router } from 'wouter';
import { StoreProvider } from 'easy-peasy';

import Home from './pages/home/Home';
import DashedFigures from './pages/sketches/DashedFigures';
import Sketch from './pages/sketches/Sketch';
import { useHashLocation } from './hooks/useHashLocation';
import store from './store';

import './index.css';

function NotFound() {
	return <p>404 Not Found</p>;
}



const Shell = () => {
	return (
		<Fragment>
			<Router hook={useHashLocation}>
				<Route path="/">
					<Home />
				</Route>
				<Route path="/sketch/:id">
					{params => <Sketch id={params.id} />}
				</Route>
			</Router>
		</Fragment>
	);
};

render((
	<StoreProvider store={store}>
		<Shell />
	</StoreProvider>
), document.getElementById('root'));
