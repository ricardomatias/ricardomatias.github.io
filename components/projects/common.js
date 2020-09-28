import React, { Fragment } from 'react';
import Link from 'next/link';

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


export const ProjectShell = (props) => (
	<div className="sketch-shell text-gray-200 font-medium text-sm py-8">
		{props.children}
	</div>
);

export const ProjectContainer = (props) => (
	<div className={`${props.className || ''}`}>
		{props.children}
	</div>
);

export const ProjectHeader = (props) => (
	<ProjectContainer className="container mx-auto p-4 pt-0 md:px-10 md:mb-12 pb-16">
		<div className="flex sketch-header flex-col">
			<HomeLink />
			<div className="mt-12">
				<h2 className="font-grot font-bold md:text-6xl lg:text-7xl text-4xl flex w-1/3 mx-auto justify-center">
					<span className="block text-center leading-none tracking-widest">{props.title.toUpperCase()}</span>
				</h2>
			</div>
		</div>
	</ProjectContainer>
);

// const filterMedia = (sketch, type) => (sketch.media.filter((media) => media.type === type));

// {/* <figcaption className="text-gray-800 text-center pt-8 text-base">{`Fig.${idx+1} - ${name}`}</figcaption> */ }

const Caption = ({ number, name }) => (
	<figcaption className="text-gray-800 text-center pt-8 text-base">{`${name}`}</figcaption>
);

export const ProjectImage = ({ name, path, idx }) => (
	<Fragment>
		<img className="max-h-full h-auto mx-auto w-full md:w-auto " alt={name} src={path} srcSet={path}></img>
		<Caption name={name} number={idx} />
	</Fragment>
);

export const ProjectVideo = ({ path, name, width, height, idx }) => (
	<Fragment>
		<video className="max-h-full h-auto mx-auto w-full md:w-auto" width={width} height={height} controls>
			<source src={path} type="video/mp4" />
				Your browser does not support the video tag.
		</video>
		<Caption name={name} number={idx} />
	</Fragment>
);

