import React, { Fragment, useRef, useCallback } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Title from './pages/home/Title';
import Main from './Main';
import Gallery from './pages/home/Gallery';
import { LandingScene } from './pages/home/scenes/Landing';


const App = () => {
	const parallax = useRef();

	return (
		<div id="outer-container" className="h-screen w-full text-gray-200 relative">
			<Parallax pages={3} ref={parallax}>
				<ParallaxLayer offset={0.1} speed={0.1}>
					<LandingScene />
				</ParallaxLayer>
				<ParallaxLayer offset={0.1} speed={0.5}>
					<Title />
				</ParallaxLayer>

				<ParallaxLayer
					offset={0}
					speed={0.1}
					onClick={() => parallax.current.scrollTo(1)}
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<span>ONE</span>
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={0.1}
					onClick={() => parallax.current.scrollTo(0)}
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<Gallery>
						<span>TWO</span>
					</Gallery>
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={-0}
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
					onClick={() => parallax.current.scrollTo(0)}>
					<span>FOOTER</span>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
};

export default App;
