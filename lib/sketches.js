import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import snarkdown from 'snarkdown';

const sketchsDir = path.join(process.cwd(), 'sketches');

export function getSketches() {
	const ids = getSketchesIds();

	return ids.map(getSketchById);
};

export function getSketchesIds() {
	return fs.readdirSync(sketchsDir)
		.filter((filename) => path.extname(filename) == '.md')
		.map((filename) => filename.replace('.md', ''));
}

export function getSketchById(id) {
	const sketch = fs.readFileSync(path.join(sketchsDir, `${id}.md`), { encoding: 'utf8' });
	const { data, content } = matter(sketch);
	
	return {...data, content: snarkdown(content) };
}

export function pickRandomSketch(sketches, id) {
	const pool = sketches.filter((sketch) => sketch !== id);
	const roll = Math.floor(Math.random() * (pool.length + 1));
	const idx = Math.max(Math.min(roll, pool.length - 1), 0);

	return pool[idx];
}
