import React, { useRef } from 'react';
import { useFrame, useThree } from 'react-three-fiber';

export const Octahedron = () => {
	const octahedronRef = useRef();

	useFrame((state, delta) => {
		const y = octahedronRef.current.position.y;

		octahedronRef.current.rotation.set(0, Math.PI + state.clock.elapsedTime * 0.5, 0);
		octahedronRef.current.position.set(0, y + 0.08 * Math.cos(state.clock.elapsedTime * 2.0), 0);
	});

	return (
		<mesh ref={octahedronRef} position={[ 0, -7.0, 0 ]} scale={[ 15, 15, 15 ]}>
			<octahedronGeometry attach="geometry" args={[ 1, 0 ]} />
			<meshPhongMaterial attach="material" color="black" />
		</mesh>
	);
};
