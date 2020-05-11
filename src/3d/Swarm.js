import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { useFrame } from 'react-three-fiber';

export const Swarm = ({ count, mouse }) => {
	const mesh = useRef();
	const dummy = useMemo(() => new THREE.Object3D(), []);

	const particles = useMemo(() => {
		const temp = [];

		for (let i = 0; i < count; i++) {
			const t = Math.random() * 100;
			const factor = 20 + 15 * (Math.cos((Math.PI * 4.0) / i) * 0.5 + 0.5);
			const speed = 0.01 + Math.random() / 200;
			const size = 2.0;

			temp.push({ t, factor, speed, size, mx: 0, my: 0 });
		}
		return temp;
	}, [ count ]);

	useFrame(state => {
		particles.forEach((particle, i) => {
			let { t, factor, speed, size } = particle;
			t = particle.t += speed;

			const s = Math.max(1.0, (Math.cos(t) * 0.5 + 0.5) * size);

			const x = Math.cos(i + t) * factor;
			const y = Math.sin(s + particle.my + t) * 7.0;
			const z = Math.sin(i + t) * factor;

			particle.mx += 0.1;
			particle.my += 0.02;

			dummy.position.set(x, y - 7.0, z);
			dummy.scale.set(size, size, size);
			dummy.updateMatrix();
			mesh.current.setMatrixAt(i, dummy.matrix);
		});

		mesh.current.instanceMatrix.needsUpdate = true;
	});

	return (
		<instancedMesh ref={mesh} args={[ null, null, count ]}>
			<sphereBufferGeometry attach="geometry" args={[ 1, 32, 32 ]} />
			<meshPhongMaterial attach="material" color="white" />
		</instancedMesh>
	);
};
