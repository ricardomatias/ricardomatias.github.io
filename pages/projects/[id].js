import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import unified from 'unified';
import parse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import format from 'rehype-format';
import rehypeHtml from 'rehype-raw';
import stringify from 'rehype-stringify';
import remark from 'remark';
import html from 'remark-html';
import {
	getItemById as getProjectById,
	getItemsIds as getProjectsIds,
} from '../../lib/file-items';
import {
	musicDir
} from '../../lib/music';
import Project from '../../components/projects';
import Layout from '../../components/layout';


export async function getStaticProps({ params }) {
	const project = getProjectById(params.id, musicDir);

	const htmlContent = await remark().use(html).process(project.content);
	project.content = htmlContent.toString();

	return {
		props: {
			project,
		},
	};
}

export async function getStaticPaths() {
	const projects = getProjectsIds(musicDir);

	return {
		paths: projects.map((project) => {
			return {
				params: {
					id: project,
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
			<Project {...props} />
		</Layout>
	);
};

export default SketchPage;
