import React, { useState, useEffect } from 'react';
import { useSpring, useTrail, animated, useTransition } from 'react-spring';

const items = [ 'ricardo', 'matias' ];
const config = { mass: 5, tension: 2000, friction: 200 };

const Header = () => {
	const props = useSpring({
		opacity: 1,
		from: { opacity: 0 },
	});
    
	const [ toggle ] = useState(true);
	const trail = useTrail(items.length, {
		config,
		opacity: toggle ? 1 : 0,
		x: toggle ? 0 : 20,
		height: toggle ? 70 : 0,
		from: { opacity: 0, x: 20, height: 0 },
		delay: 500,
	});

	const [ show, showTitle ] = useState(false);

	const transitions = useTransition(show, null, {
		from: { position: 'absolute', opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		delay: 3000
	});

	useEffect(() => {
		showTitle(true);
	}, [ show ]);

	return (
		<div className="header-container container mx-8 mt-10 mb-4 md:mx-auto md:pt-40 relative flex flex-col z-50 content-between">
			<div className="flex flex-col flex-grow">
				<div className="header-title font-title text-gray-200 inline-block tracking-widest z-10">
					{trail.map(({ x, height, ...rest }, index) => (
						<animated.div
							key={items[index]}
							className="trails-text"
							style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
							<animated.h2 className={`${index == 1 ? 'md:ml-64 text-right md:text-left' : ''} md:text-7xl text-5xl`} style={{ height }}>{items[index]}</animated.h2>
						</animated.div>
					))}
				</div>
				<div className="header-title font-header text-gray-200 tracking-widest pt-10 flex md:justify-start justify-center md:pt-40 sm:text-2xl md:text-4xl z-10">
					{transitions.map(({ item, key, props }) =>
						item && <animated.div key={key} style={props}>CREATIVE DEVELOPER</animated.div>
					)}
				</div>
			</div>
			<div className="flex justify-center text-xs italic">
				<p>SCROLL DOWN</p>
			</div>
		</div>
	);
};

export default Header;
