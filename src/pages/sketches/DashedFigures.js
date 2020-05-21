import React, { Fragment, useState } from 'react';
import { ActiveLink } from '../../components/ActiveLink';

const images = [
	{ name: 'Hades', src:'/assets/projects/dashed-figures/hades-sm.png' },
	{ name: 'Torso', src: '/assets/projects/dashed-figures/body-sm.png' },
	{ name: 'Lady', src: '/assets/projects/dashed-figures/lady-sm_01.png' },
];

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

const DashedFigures = () => {
	return (
		<Fragment>
			<SketchShell>
				<SketchContainer className="container mx-auto p-4 pt-0 md:px-10 md:mb-12">
					<SketchHeader title="Dashed Figures" />
				</SketchContainer>
					
				{images.map(({ src, name }, idx) => {
					return (
						<SketchContainer key={name} className={`w-full h-screen px-4 md:px-32 ${idx == 0 ? 'pb-12' : 'py-12'} ${idx == 1 ? ' bg-white' : ''}`}>
							<div className="container font-sans md:p-4 h-full w-full mx-auto">
								<div className="flex flex-shrink flex-col h-full justify-center mx-auto">
									<img className="sketch-image max-h-full h-auto mx-auto w-full md:w-auto " alt={name} src={src} srcSet={src}></img>
								</div>
							</div>
						</SketchContainer>
					);
				})}
					
				<SketchContainer>
					<div className="flex flex-col md:w-2/3 mx-auto mb-24">
						<TechStack stack={[ 'OPENRNDR', 'GLSL' ]} />
					</div>
				</SketchContainer>
					
				<SketchContainer className="w-full p-8 bg-white sm:py-12 text-gray-800">
					<div className="container flex md:w-2/3 mx-auto flex-col">
						<h2 className="font-bold font-grot text-xl">PROCESS</h2>
						<br />
						<p className="font-body">
							Dashed figures was an experiment involving Poisson Disk filling.
						</p>
					</div>
				</SketchContainer>
				<SketchContainer className="w-full bg-black mb-24">
					<div className="container mx-auto md:h-64 h-48 overflow-hidden" style={{
						background: 'url(/assets/projects/dashed-figures/lady-sm.png)',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundPositionY: '40%',
					}} />
				</SketchContainer>
				<SketchContainer className="container mx-auto">
					<div className="mx-auto">
						<img className="sketch-image h-auto mx-auto w-full md:w-auto md:h-full" alt={name} src="/assets/projects/broken-glass/thumbnail-broken-1.jpg" style={{ width: '200px', height: '200px' }}></img>
						<h2 className="mt-4 font-bold font-grot text-lg text-center">BROKEN GLASS</h2>
					</div>
				</SketchContainer>
			</SketchShell>
		</Fragment>
	);
};

export default DashedFigures;
