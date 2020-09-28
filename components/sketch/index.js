import React, { useEffect } from 'react';
import { TechStack } from './TechStack';
import { Banner } from './Banner';
import { assetLink, thumbnailLink } from '../../lib/links';
import { ProjectLink } from '../links/ProjectLink';
import { MarkdownContent } from '../projects/Content';
import {
	ProjectContainer,
	ProjectHeader,
	ProjectImage,
	ProjectShell,
	ProjectVideo
} from '../projects/common';


// const filterMedia = (sketch, type) => (sketch.media.filter((media) => media.type === type));

// {/* <figcaption className="text-gray-800 text-center pt-8 text-base">{`Fig.${idx+1} - ${name}`}</figcaption> */ }

const Sketch = ({ sketch, randomSketch }) => {
	useEffect(() => {
		window.scroll(0.0, 0.0);
	}, [ sketch.id ]);

	return (
		<ProjectShell>
			<ProjectHeader title={sketch.title} />
			<div className="bg-white w-full h-full pt-8">
				{sketch.media.map(({ id, name, path: imagePath, type, width, height }, idx) => {
					const path = assetLink('sketches', sketch.id, imagePath);
					return (
						<ProjectContainer key={id} className={`h-screen w-full px-4 md:px-16 md:py-16 ${idx == 0 ? '' : 'md:my-32'}`}>
							<div className="container font-title md:p-4 h-full w-full mx-auto">
								<div className="flex flex-shrink flex-col h-full justify-center mx-auto">
									{
										type === 'image' ?
											<ProjectImage path={path} name={name} idx={idx} /> :
											<ProjectVideo path={path} name={name} width={width} height={height} idx={idx} />
									}

								</div>
							</div>
						</ProjectContainer>
					);
				})}
			</div>
			<ProjectContainer>
				<div className="flex flex-col md:w-2/3 mx-auto my-24">
					<TechStack stack={sketch.techStack} />
				</div>
			</ProjectContainer>
			<MarkdownContent content={sketch.content} />
			{sketch.banner ? <Banner sketch={sketch} /> : null }
			<ProjectContainer className="container mx-auto mt-24">
				<div className="mx-auto flex justify-center">
					<ProjectLink id={randomSketch.id} base="sketches">
						<img
							// className="sketch-image h-auto mx-auto w-full md:w-auto md:h-full"
							alt={randomSketch.title} src={thumbnailLink('sketches', randomSketch)}
							style={{ width: '200px', height: '200px' }}></img>
						<h2 className="mt-4 font-bold font-grot text-lg text-center">{randomSketch.title.toUpperCase()}</h2>
					</ProjectLink>
				</div>
			</ProjectContainer>
		</ProjectShell>
	);
};

export default Sketch;
