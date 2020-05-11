import React from 'react';
import Title from './Title';
import Main from '../../Main';
import Gallery from './Gallery';
import { LandingScene } from './scenes/Landing';


const App = () => {

	return (
		<div id="outer-container" className="h-full w-full text-gray-200 relative">
			<section className="h-screen relative flex">
				<Title />
				<LandingScene />
			</section>
			<section className="inner-container h-screen">
				<Main />
			</section>
			<Gallery>
				<span>TWO</span>
			</Gallery>
		</div>
	);
};

export default App;
