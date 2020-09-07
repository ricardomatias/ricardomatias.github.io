import React, { Fragment } from 'react';

export const TechStack = ({ stack }) => (
	<Fragment>
		<hr className="border" />
		<div className="flex my-6 md:my-12 justify-around md:w-2/3 md:mx-auto">
			<div className="block">
				{stack.map((tech) => {
					return (<div className="align-middle" key={tech}>
						<img src="/icon-diamond.svg" srset="/icon-diamond.svg" alt="Diamond" className="inline-block w-4" />
						<span className="pl-4 inline-block text-sm font-medium font-body">{tech}</span>
					</div>);
				})}
			</div>
			<div className="block flex justify-center flex-col font-grot">
				<h4>Tech</h4>
				<h4>Stack</h4>
			</div>
		</div>
		<hr className="border" />
	</Fragment>
);
