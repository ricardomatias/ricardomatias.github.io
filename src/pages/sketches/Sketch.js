import React, { Fragment, useState, useEffect } from 'react';
import { useStoreState } from 'easy-peasy';
import { ActiveLink } from '../../components/ActiveLink';

const SketchHeader = (props) => (
	<div className="flex sketch-header flex-col">
		<HomeLink />
		<div className="mt-12">
			<h2 className="font-grot font-bold md:text-6xl lg:text-7xl text-4xl flex w-1/3 mx-auto justify-center">
				<span className="block text-center leading-none tracking-widest">{props.title.toUpperCase()}</span>
			</h2>
		</div>
	</div>
);

const HomeLink = () => (
	<div className="flex">
		<ActiveLink className="break-all tracking-widest text-xs font-grot text-grey-200 font-bold" href="/">
			<span className="block">RICARDO</span>
			<span className="block">MATIAS</span>
		</ActiveLink>
	</div>
);

const TechStack = ({ stack }) => (
	<Fragment>
		<hr className="border" />
		<div className="flex my-6 md:my-12 justify-around md:w-2/3 md:mx-auto">
			<div className="block">
				{
					stack.map((tech) => {
						return (
							<div className="align-middle" key={tech}>
								<img src="/assets/icon-diamond.svg" srset="/assets/icon-diamond.svg" alt="Diamond" className="inline-block w-4" />
								<span className="pl-4 inline-block text-sm font-medium font-body">{tech}</span>
							</div>
						);
					})
				}
			</div>
			<div className="block flex justify-center flex-col font-grot">
				<h4>Tech</h4>
				<h4>Stack</h4>
			</div>
		</div>
		<hr className="border" />
	</Fragment>
);

const SketchShell = (props) => (
	<div className="sketch-shell text-gray-200 font-medium text-sm py-8">
		{props.children}
	</div>
);

const SketchContainer = (props) => (
	<div className={`${props.className || ''}`}>
		{props.children}
	</div>
);

const getBannerPath = (sketch, id) => (sketch.media.filter((media) => media.id === id)[0].path);

const pickRandomSketch = (sketches, id) => {
	const pool = sketches.filter((sketch) => sketch.id !== id);
	const roll = Math.floor(Math.random() * (pool.length + 1));
	const idx = Math.max(Math.min(roll, pool.length - 1), 0);

	return pool[idx];
};

const Banner = ({ sketch }) => (
	<div className="w-full bg-black mb-24">
		<div className="container mx-auto md:h-64 h-48 overflow-hidden " style={{
			backgroundImage: `url(${getBannerPath(sketch, sketch.banner)})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundPositionY: '40%',
		}} />
	</div>
);

const Sketch = ({ id }) => {
	const sketches = useStoreState(state => state.sketches);
	const sketch = useStoreState(state => state.sketchById(id));
	const randomSketch = pickRandomSketch(sketches, sketch.id);

	console.log(getBannerPath(sketch, sketch.banner));

	useEffect(() => {
		window.scroll(0.0, 0.0);
	}, [ sketch.id ]);

	return (
		<Fragment>
			<SketchShell>
				<SketchContainer className="container mx-auto p-4 pt-0 md:px-10 md:mb-12 pb-16">
					<SketchHeader title={sketch.title} />
				</SketchContainer>
				<div className="bg-white w-full h-full pt-8">
					{sketch.media.map(({ id, name, path }, idx) => {
						return (
							<SketchContainer key={id} className={`h-screen w-full px-4 md:px-16 md:py-16 ${idx == 0 ? '' : 'md:my-32'}`}>
								<div className="container font-title md:p-4 h-full w-full mx-auto">
									<div className="flex flex-shrink flex-col h-full justify-center mx-auto">
										<img className="sketch-image max-h-full h-auto mx-auto w-full md:w-auto " alt={name} src={path} srcSet={path}></img>
										{/* <figcaption className="text-gray-800 text-center pt-8 text-base">{`Fig.${idx+1} - ${name}`}</figcaption> */}
									</div>
								</div>
							</SketchContainer>
						);
					})}
				</div>
				<SketchContainer>
					<div className="flex flex-col md:w-2/3 mx-auto my-24">
						<TechStack stack={sketch.techStack} />
					</div>
				</SketchContainer>

				<SketchContainer className="w-full p-8 bg-white sm:py-12 text-gray-800">
					<div className="container flex md:w-2/3 mx-auto flex-col">
						<h2 className="font-bold font-grot text-xl">PROCESS</h2>
						<br />
						<p className="font-body">
							{ sketch.process }
						</p>
					</div>
				</SketchContainer>
				<Banner sketch={sketch} />
				<SketchContainer className="container mx-auto">
					<div className="mx-auto">
						<ActiveLink href={`/sketch/${randomSketch.id}`}>
							<img className="sketch-image h-auto mx-auto w-full md:w-auto md:h-full" alt={randomSketch.title} src={randomSketch.thumbnail} style={{ width: '200px', height: '200px' }}></img>
							<h2 className="mt-4 font-bold font-grot text-lg text-center">{randomSketch.title.toUpperCase()}</h2>
						</ActiveLink>
					</div>
				</SketchContainer>
			</SketchShell>
		</Fragment>
	);
};

export default Sketch;
