import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getSketchById, getSketchesIds, pickRandomSketch } from '../../lib/sketches';
import Sketch from '../../components/sketch';
import Layout from '../../components/layout';

export async function getStaticProps({ params }) {
    const sketches = getSketchesIds();
    const sketch = getSketchById(params.id);
    const randomSketchId = pickRandomSketch(sketches, params.id);
    const randomSketch = getSketchById(randomSketchId);

    // const content = await markdownToHtml(post.content || ''

    return {
        props: {
            sketch,
            randomSketch
        },
    }
}

export async function getStaticPaths() {
    const sketches = getSketchesIds();

    return {
        paths: sketches.map((sketch) => {
            return {
                params: {
                    id: sketch,
                },
            }
        }),
        fallback: false,
    }
}

export default (props = {}) => {
    const router = useRouter()
    const { id } = router.query

    if (!router.isFallback && !id) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout>
            <Sketch {...props} />
        </Layout>
    );
}
