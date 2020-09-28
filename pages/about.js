import dynamic from 'next/dynamic';
import { getSketches } from '../lib/sketches';

export async function getStaticProps() {
	const sketches = getSketches();
	return {
		props: { sketches },
	};
}

const HomePage = ({ sketches }) => {
	return (
		<Layout>
			<div className="w-full h-full">
				<section className="h-screen relative mx-auto">
					<Title />
					<LandingScene />
				</section>
				<Gallery className="h-screen container mx-auto" sketches={sketches} />
			</div>
		</Layout>
	);
};

export default HomePage;

