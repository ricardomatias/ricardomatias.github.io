import * as THREE from 'three';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

function Box(props) {
	// This reference will give us direct access to the mesh
	const mesh = useRef();

	// Set up state for the hovered and active state
	const [ hovered, setHover ] = useState(false);
	const [ active, setActive ] = useState(false);

	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? [ 1.5, 1.5, 1.5 ] : [ 1, 1, 1 ]}
			onClick={e => setActive(!active)}
			onPointerOver={e => setHover(true)}
			onPointerOut={e => setHover(false)}>
			<boxBufferGeometry attach="geometry" args={[ 1, 1, 1 ]} />
			<meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	);
}

function Backdrop({ onMouseMove, children }) {
	return (
		<div className="h-full w-full" style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 1 }} onMouseMove={onMouseMove}>
			<Canvas
				gl={{ alpha: true, antialias: false, logarithmicDepthBuffer: true }}
				camera={{ fov: 45, position: [ 0, 0, 120 ] }}
				onCreated={({ gl }) => {
					gl.toneMapping = THREE.ACESFilmicToneMapping;
					gl.outputEncoding = THREE.sRGBEncoding;
					// gl.shadowMap.type = THREE.PCFSoftShadowMap;
					// gl.shadowMap.enabled = true;
				}}>
				{ children }
			</Canvas>
		</div>
	);
}

Backdrop.propTypes = {
	onMouseMove: PropTypes.func,
	children: PropTypes.element,
};

export default Backdrop;
