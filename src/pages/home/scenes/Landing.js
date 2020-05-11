import React, { useRef, useCallback, Suspense } from 'react';
import { Octahedron, Swarm } from '../../../3d';
import Backdrop from './Backdrop';
import Effects from './Effects';

export const LandingScene = () => {
	const scene = useRef();
    
	const mouse = useRef([ 0, 0 ]);
	const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [ x - window.innerWidth / 2, y - window.innerHeight / 2 ]), []);
	let scenePosition = [ 40.0, 0.0, 0.0 ];

	if (window.innerWidth < 640) {
		scenePosition = [ 0.0, -10.0, 0.0 ];
	}

	console.log(scenePosition);

	return (
		<Backdrop onMouseMove={onMouseMove}>
			<scene ref={scene} position={scenePosition}>

				<ambientLight intensity={1.1} />
				{/* <pointLight position={[ 100, 100, 100 ]} intensity={0.2} /> */}
				<pointLight position={[ 100, 100, 100 ]} intensity={2} color="#fe0000" />
				<pointLight position={[ -50, -100, 0 ]} intensity={5} color="#fe0000" />
				{/* <pointLight position={[ -50, -100, 0 ]} intensity={0.2} /> */}

				<Octahedron />

				<Swarm mouse={mouse} count={12} />

				<Suspense fallback={null}>
					<Effects />
				</Suspense>
			</scene>
		</Backdrop>
	);
};
