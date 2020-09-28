import path from 'path';

export const sketchesDir = path.join(process.cwd(), 'sketches');

export function pickRandomSketch(sketches, id) {
	const pool = sketches.filter((sketch) => sketch !== id);
	const roll = Math.floor(Math.random() * (pool.length + 1));
	const idx = Math.max(Math.min(roll, pool.length - 1), 0);

	return pool[idx];
}
