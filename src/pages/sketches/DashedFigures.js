import React, { Fragment, useState } from 'react';
import { ActiveLink } from '../../components/ActiveLink';

const images = [
	{ name: 'Hades', src:'/assets/projects/dashed-figures/hades-sm.png' },
	{ name: 'Torso', src: '/assets/projects/dashed-figures/body-sm.png' },
	{ name: 'Lady', src: '/assets/projects/dashed-figures/lady-sm_01.png' },
];

const SketchHeader = (props) => (
	<div className="flex sketch-header flex-col font-header">
		<HomeLink />
		<div className="mt-12">
			<h2 className="text-center text-2xl">{props.title.toUpperCase()}</h2>
		</div>
	</div>
);

const HomeLink = () => (
	<div className="flex text-grey-200 ">
		<ActiveLink className="break-all" href="/">
			<span className="block">ricardo</span>
			<span className="block">matias</span>
		</ActiveLink>
	</div>
);

const TechStack = ({ stack }) => (
	<Fragment>
		{/* <hr className="border-gray-200 border rounded-sm"></hr> */}
		<hr/>
		<div className="flex my-12 justify-around md:w-2/3 md:mx-auto">
			<div className="block font-header">
				{
					stack.map((tech) => {
						return (
							<div className="align-middle" key={tech}>
								<img src="/assets/icon-diamond.svg" srset="/assets/icon-diamond.svg" alt="Diamond" className="inline-block w-4" />
								<span className="pl-4 inline-block text-sm font-bold">{tech}</span>
							</div>
						);
					})
				}
			</div>
			<div className="block flex justify-center flex-col font-sans">
				<h4>Tech Stack</h4>
			</div>
		</div>
		<hr />

		{/* <div className="border-gray-200 border rounded-sm"></div> */}
	</Fragment>
);

const SketchShell = (props) => (
	<div className="sketch-shell text-gray-200 font-medium text-sm">
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
				<SketchContainer className="container mx-auto p-4 md:pt-10 md:px-10">
					<SketchHeader title="Dashed Figures" />
				</SketchContainer>
					
				{images.map(({ src, name }, idx) => {
					return (
						<SketchContainer key={name} className={`w-full px-4 py-12 md:p-32 ${idx == 1 ? ' bg-white' : ''}`}>
							<div className="flex flex-col font-sans p-4">

								<div className="flex justify-center md:w-1/3 mx-auto shadow-sm">
									<img className="sketch-image" alt={name} src={src}></img>
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
					
				<SketchContainer className="w-full bg-white px-4 py-12 md:p-32 text-gray-800">
					<div className="flex md:w-2/3 mx-auto flex-col">
						<h2 className="font-bold font-header text-xl">PROCESS</h2>
						<br />
						<p className="font-body">
							Dashed figures was an experiment involving Poisson Disk filling.
						</p>
					</div>
				</SketchContainer>
				<div className="w-full bg-black mb-24">
					<div className="container mx-auto md:p-48 md:h-64 h-48 overflow-hidden" style={{
						background: 'url(/assets/projects/dashed-figures/lady-sm.png)',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}} />
				</div>
			</SketchShell>
		</Fragment>
	);
};

export default DashedFigures;
