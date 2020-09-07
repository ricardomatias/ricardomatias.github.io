import React, { Fragment, useState, useEffect } from 'react';
import { TechStack } from './TechStack';
import { Banner } from './Banner';
import { assetLink, thumbnailLink } from '../../lib/links';
import { SketchLink } from '../links/SketchLink';
import Link from 'next/link';
import { Content } from './Content';

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
		<Link href="/">
			<a className="break-all tracking-widest text-xs font-grot text-grey-200 font-bold">
				<span className="block">RICARDO</span>
				<span className="block">MATIAS</span>
			</a>
		</Link>
	</div>
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

// const filterMedia = (sketch, type) => (sketch.media.filter((media) => media.type === type));

// {/* <figcaption className="text-gray-800 text-center pt-8 text-base">{`Fig.${idx+1} - ${name}`}</figcaption> */ }

const Caption = ({ number, name }) => (
	<figcaption className="text-gray-800 text-center pt-8 text-base">{`${name}`}</figcaption>
);

const SketchImage = ({ name, path, idx }) => (
	<Fragment>
		<img className="max-h-full h-auto mx-auto w-full md:w-auto " alt={name} src={path} srcSet={path}></img>
		<Caption name={name} number={idx} />
	</Fragment>
);

const SketchVideo = ({ path, name, width, height, idx }) => (
	<Fragment>
		<video className="max-h-full h-auto mx-auto w-full md:w-auto" width={width} height={height} controls>
			<source src={path} type="video/mp4" />
				Your browser does not support the video tag.
		</video>
		<Caption name={name} number={idx} />
	</Fragment>
);

const Sketch = ({ sketch, randomSketch }) => {
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
					{sketch.media.map(({ id, name, path: imagePath, type, width, height }, idx) => {
						const path = assetLink(sketch, imagePath);
						return (
							<SketchContainer key={id} className={`h-screen w-full px-4 md:px-16 md:py-16 ${idx == 0 ? '' : 'md:my-32'}`}>
								<div className="container font-title md:p-4 h-full w-full mx-auto">
									<div className="flex flex-shrink flex-col h-full justify-center mx-auto">
										{
											type === 'image' ?
												<SketchImage path={path} name={name} idx={idx} /> :
												<SketchVideo path={path} name={name} width={width} height={height} idx={idx} />
										}

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
				<Content content={sketch.content} />
				{sketch.banner ? <Banner sketch={sketch} /> : null }
				<SketchContainer className="container mx-auto mt-24">
					<div className="mx-auto flex justify-center">
						<SketchLink id={randomSketch.id}>
							<img
								// className="sketch-image h-auto mx-auto w-full md:w-auto md:h-full"
								alt={randomSketch.title} src={thumbnailLink(randomSketch)}
								style={{ width: '200px', height: '200px' }}></img>
							<h2 className="mt-4 font-bold font-grot text-lg text-center">{randomSketch.title.toUpperCase()}</h2>
						</SketchLink>
					</div>
				</SketchContainer>
			</SketchShell>
		</Fragment>
	);
};

export default Sketch;
