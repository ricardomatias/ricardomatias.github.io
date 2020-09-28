import dynamic from 'next/dynamic'
import Title from '../components/home/Title';
import { getItems } from '../lib/file-items';
import { sketchesDir } from '../lib/sketches';
import { musicDir } from '../lib/music';
import Layout from '../components/layout';

const Gallery = dynamic(() => import('../components/home/Gallery'), { ssr: false });
const LandingScene = dynamic(() => import('../components/scenes/Landing'), { ssr: false });

export async function getStaticProps() {
	const sketches = getItems(sketchesDir);
	const music = getItems(musicDir);
	return {
		props: { sketches, music },
	}
}

const HomePage = ({ sketches, music }) => {
	return (
		<Layout>
			<div className="w-full h-full">
				<section className="h-screen relative mx-auto">
					<Title />
					<LandingScene />
				</section>
				<Gallery className="container mx-auto" projects={sketches} title="SKETCHES" />
				<Gallery className="container mx-auto" projects={music} title="PROJECTS" />
			</div>
		</Layout>
	);
};

export default HomePage;

