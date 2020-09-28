import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import {
	getItemById as getSketchById,
	getItemsIds as getSketchesIds,
} from '../../lib/file-items';
import {
	pickRandomSketch,
	sketchesDir
} from '../../lib/sketches';
import Sketch from '../../components/sketch';
import Layout from '../../components/layout';


export async function getStaticProps({ params }) {
	const sketches = getSketchesIds(sketchesDir);
	const sketch = getSketchById(params.id, sketchesDir);
	const randomSketchId = pickRandomSketch(sketches, params.id);
	const randomSketch = getSketchById(randomSketchId, sketchesDir);

	return {
		props: {
			sketch,
			randomSketch
		},
	};
}

export async function getStaticPaths() {
	const sketches = getSketchesIds(sketchesDir);

	return {
		paths: sketches.map((sketch) => {
			return {
				params: {
					id: sketch,
				},
			};
		}),
		fallback: false,
	};
}

const SketchPage = (props = {}) => {
	const router = useRouter();
	const { id } = router.query;

	if (!router.isFallback && !id) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<Layout>
			<Sketch {...props} />
		</Layout>
	);
};

export default SketchPage;
